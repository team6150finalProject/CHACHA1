import React from 'react';
import cookie from 'react-cookies';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartCard from "./CartCard";
import {connect} from "react-redux";
import {addorder} from "../redux/actions";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.orders = [];
        this.state = {
            timemillis: "",
            price: 0,
            products: ""
        };
        for (var i = 1; i <= parseInt(cookie.load('orderNum')); i++) {
            var tmp = JSON.parse(cookie.load('order' + i)).split(",");
            var price = tmp[2]*tmp[5];
            this.orders.push({
                product: tmp[0],
                size: tmp[1],
                price: price,
                ice: tmp[3],
                sweet: tmp[4],
                qty: tmp[5]
            });
            this.state.price += price;
        }
        console.log(this.orders);
    }
    formatCards = () => {
        return this.orders.map((reading, index) => <CartCard reading={reading} key={index} />)
    }
    handleOrder(state) {
        this.props.addorder(state);
        for (var i = 1; i <= parseInt(cookie.load('orderNum')); i++) {
            cookie.remove('order' + i);
        }
        cookie.save('drinkNum', 0, { path: "/" });
        cookie.save('orderNum', 0, { path: "/" });
        window.open("/", "_self");
    }
    render() {
        const isEmpty = parseInt(cookie.load('orderNum')) == 0;
        if (isEmpty) {
            return (
                <div style={{height:800, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <Card className="text-center">
                      <Card.Header>The Cart is emptied</Card.Header>
                      <Card.Body>
                        <Link to={'/order'} >
                            <Button variant="secondary">Go to Order page</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                </div>
            )
        } else {
            return(
                <div style={{minHeight:800}}>
                    <h1 style={{textAlign: "center", padding: 10}}>Cart</h1>
                    <div className="content-warp">
                        <div>
                            {this.formatCards()}
                        </div>
                    </div>
                    <div style={{textAlign: "center", padding: 10}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <h3 style={{width: "200px"}}>Your Location: </h3>
                    <Form.Select aria-label="Default select example" style={{width: "340px"}}>
                      <option value="1">75 Service St, San Jose, CA 95112</option>
                      <option value="2">52 N Carson St, Carson City, NV 89701</option>
                      <option value="3">22 W 5rd St, New York, NY 10019</option>
                      <option value="3">800 Marlins Way, Miami, FL 33125</option>
                    </Form.Select>
                    </div>
                    <h3>Total: ${(this.state.price).toFixed(2)}</h3>
                    <Button variant="secondary" onClick={() => this.handleOrder(this.state)}>Place Order</Button>
                    </div>
                </div>
            )
        }
    }
}

export default connect(
    state =>({}),
    {addorder}
)
(Cart);