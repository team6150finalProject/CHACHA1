import React from 'react';
import cookie from 'react-cookies';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartCard from "./CartCard";
import {connect} from "react-redux";
import {addorder} from "../redux/actions";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timemillis: Date.now(),
            price: 0,
            products: [],
            location: "75 Service St, San Jose, CA 95112"
        };
        this.handleLocationSelected = this.handleLocationSelected.bind(this);

        for (var i = 1; i <= parseInt(cookie.load('orderNum')); i++) {
            var tmp = JSON.parse(cookie.load('order' + i)).split(",");
            var extras = [];
            var topping = 6;
            while(tmp[topping]) {
                extras.push(tmp[topping]);
                topping++;
            }
            var price = (parseFloat(tmp[2]) + parseFloat(extras.length*0.5))*tmp[5];
            this.state.products.push({
                index: i,
                name: tmp[0],
                size: tmp[1],
                price: price,
                ice: tmp[3],
                sweetness: tmp[4],
                quantity: tmp[5],
                extras: extras
            });
            this.state.price += price;
        }
        if (this.props.user.userData.isadmin && (this.state.price >= 10)) {
            this.state.price -= 2;
        }
        console.log(this.state.products);
    }
    formatCards = () => {
        return this.state.products.map((reading, index) => <CartCard reading={reading} key={index} />)
    }
    handleOrder(state) {
        state.price = (state.price).toFixed(2);
        this.props.addorder(state);
        for (var i = 1; i <= parseInt(cookie.load('orderNum')); i++) {
            cookie.remove('order' + i);
        }
        cookie.save('drinkNum', 0, { path: "/" });
        cookie.save('orderNum', 0, { path: "/" });
        this.props.history.push({pathname:'/confirmation', state:{order: state}})
    }

    handleLocationSelected(event){
        var index = event.target.selectedIndex
        this.setState({location: event.target[index].text});
    }

    render() {
        const isEmpty = parseInt(cookie.load('orderNum')) == 0;
        const is2OFF = this.props.user.userData.isadmin && (this.state.price >= 10);
        if (isEmpty) {
            return (
              <div style={{height: '60vh', width: '40%', margin: '0 auto', backgroundColor: '#e5e1cd'}}>
              <div style={{height: '50%', width: '100%', paddingTop: '10vh'}}>
                  <img src={process.env.PUBLIC_URL + "/img/empty-cart.png"} style={{display: 'block', height: '100%', marginLeft: 'auto', marginRight: 'auto'}} />
                </div>
                <div style={{display:'block', height: '50%', width: '100%', textAlign: 'center'}}>
                  <h1 style={{marginTop: '10vh'}}>Your cart is currently empty</h1>
                  <Link to={'/order'} >
                      <Button variant="secondary">Go to Order page</Button>
                  </Link>
                </div>
            </div>
            )
        } else {
            return(
                <div style={{minHeight: '50vh'}}>
                    <h1 style={{textAlign: "center", padding: 10}}>Cart</h1>
                    <div className="content-warp">
                        <div>
                            {this.formatCards()}
                        </div>
                    </div>
                    <div style={{textAlign: "center", padding:20}}>
                        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <h5 style={{width: "260px"}}>Select Your Pick Up Store: </h5>
                            <Form.Select aria-label="Default select example" style={{width: "320px"}}>
                            <option value="1">75 Service St, San Jose, CA 95112</option>
                            <option value="2">52 N Carson St, Carson City, NV 89701</option>
                            <option value="3">22 W 5rd St, New York, NY 10019</option>
                            <option value="3">800 Marlins Way, Miami, FL 33125</option>
                            </Form.Select>
                        </div>
                        <h3 style={{fontWeight: "bold", padding:20}}>Total: ${(this.state.price).toFixed(2)}
                        {is2OFF
                            ? <nobr> ($2 off for member order of $10+) </nobr>
                            : <nobr></nobr>
                        }
                        </h3>
                        <p>
                            <Link to={'/order'} >
                            <Button variant="primary">Continue Shopping</Button>
                            </Link>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <Button variant="dark" onClick={() => this.handleOrder(this.state)}>Place Order</Button>
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default connect(
    state =>({user: state.fetchreducer}),
    {addorder}
)
(Cart);