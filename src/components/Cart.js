import React from 'react';
import cookie from 'react-cookies';
import {Button} from 'react-bootstrap';
import {Form, Tabs, Tab} from 'react-bootstrap';
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
            subtotal: 0,
            products: [],
            pickUp: true,
            location: "",
        };
        this.handleLocationSelected = this.handleLocationSelected.bind(this);
        this.handleShippingMethod = this.handleShippingMethod.bind(this);

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
                unitPrice: tmp[2],
                price: price,
                ice: tmp[3],
                sweetness: tmp[4],
                quantity: tmp[5],
                extras: extras
            });
            this.state.price += price;
            console.log("price: "+this.state.price);
        }
        this.state.subtotal = this.state.price;
        /*if (this.props.user.userData.isadmin && (this.state.price >= 10)) {
            this.state.price -= 2;
        }*/
        console.log(this.state.products);
    }
    formatCards = () => {
        return this.state.products.map((reading, index) => <CartCard reading={reading} key={index} />)
    }
    handleOrder(state) {
        state.price = (state.price);
        this.props.history.push({pathname:'/payment', state:{order: state}})
    }

    handleLocationSelected(event){
        this.setState({location: event.target.value});
    }

    handleShippingMethod(key) {
        this.state.pickUp = (key === "pickUp") ? true : false;
    }

    render() {
        const isEmpty = parseInt(cookie.load('orderNum')) === 0;
        const is2OFF = this.props.user.userData.isadmin && (this.state.price >= 10);
        if (isEmpty) {
            return (
              <div style={{height: '60vh', width: '40%', margin: '0 auto', backgroundColor: '#e5e1cd'}}>
              <div style={{height: '50%', width: '100%', paddingTop: '10vh'}}>
                  <img src={process.env.PUBLIC_URL + "/img/empty-cart.png"}  alt = 'empty cart' style={{display: 'block', height: '100%', marginLeft: 'auto', marginRight: 'auto'}} />
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
                <div  style={{minHeight: '50vh', paddingBottom:'20px'}}>
                    <div  className="leftSide" style={{width: '70%', float: 'left'}}>
                        <h2 style={{textAlign: "center", padding: 10, }}>Order Summary</h2>
                        <div className="content-warp">
                            <div>
                                {this.formatCards()}
                            </div>
                        </div>
                    </div>
                    <div className="rightSide" style={{marginLeft:'70%', padding: 10, marginTop: '0.9em'}}>
                        <Tabs defaultActiveKey={"pickUp"} onSelect={this.handleShippingMethod} style={{justifyContent: 'left', width:'80%',marginTop: '2em', alignItems: 'center', display: 'flex'}} defaultActiveKey="pickUp" id="shipping" className="mb-3">
                            <Tab eventKey="delivery" title="Delivery">
                                <Form.Label>Street Address:</Form.Label>
                                <Form.Control type="text" placeholder="Please enter your address" onBlur= {this.handleLocationSelected} />
                                <br/>
                            </Tab>
                            <Tab eventKey="pickUp" title="Pick up" style={{textAlign: 'left', display: 'block'}}>
                                <input type="radio" id="CA" name="pickup" value="75 Service St, San Jose, CA 95112" checked={this.state.location === '75 Service St, San Jose, CA 95112'}  onChange={this.handleLocationSelected}/><label> 75 Service St, San Jose, CA 95112</label>
                                <br />
                                <input type="radio" id="NV" name="pickup" value="52 N Carson St, Carson City, NV 89701" checked={this.state.location === '52 N Carson St, Carson City, NV 89701'}  onChange={this.handleLocationSelected}/><label> 52 N Carson St, Carson City, NV 89701</label>
                                <br />
                                <input type="radio" id="NY" name="pickup" value="22 W 5rd St, New York, NY 10019" checked={this.state.location === '22 W 5rd St, New York, NY 10019'}  onChange={this.handleLocationSelected}/><label> 22 W 5rd St, New York, NY 10019</label>
                                <br />
                                <input type="radio" id="FL" name="pickup" value="800 Marlins Way, Miami, FL 33125" checked={this.state.location === '800 Marlins Way, Miami, FL 33125'}  onChange={this.handleLocationSelected}/><label> 800 Marlins Way, Miami, FL 33125</label>
                                <br />
                            </Tab>

                        </Tabs>
                        <br/>
                        <hr style={{textAlign:'center',width:'80%'}}/>
                        <h3 style={{fontWeight: "bold", padding:20}}>Total: ${(this.state.price)}
                        {/*{is2OFF
                            ? <nobr> ($2 off for member order of $10+) </nobr>
                            : <nobr></nobr>
                        }*/}
                        </h3>
                        <p>
                            <Link to={'/order'} >
                            <Button variant="primary" style={{margin:'5px'}}>Continue Shopping</Button>
                            </Link>
                            &nbsp; &nbsp;
                            <Button variant="dark" onClick={() => this.handleOrder(this.state)} style={{margin:'5px'}}>Place Order</Button>
                        </p>
                    </div>
                    <br className="clear"  style={{clear:'left'}}/>
                </div>
            )
        }
    }
}

export default connect(
    state =>({user: state.fetchreducer})
)
(Cart);
