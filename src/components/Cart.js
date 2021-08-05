import React from 'react';
import cookie from 'react-cookies';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartCard from "./CartCard";
import {connect} from "react-redux";
import {addorder} from "../redux/actions";
import {reqAddOrder} from "../api";

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
        const data ={
            timemillis: '',
            price: this.state.price,
            products: this.state.products
        }
        reqAddOrder(data);

    }
    render() {
        return(
            <div>
                <h2 style={{textAlign: "center"}}>Cart</h2>
                <div className="content-warp">
                    <div>
                        {this.formatCards()}
                    </div>
                </div>
                <div style={{textAlign: "center"}}>
                <div>Total: ${(this.state.price).toFixed(2)}</div>
                <Form.Select aria-label="Default select example">
                  <option value="1">75 Service St, San Jose, CA 95112</option>
                  <option value="2">52 N Carson St, Carson City, NV 89701</option>
                  <option value="3">22 W 5rd St, New York, NY 10019</option>
                  <option value="3">800 Marlins Way, Miami, FL 33125</option>
                </Form.Select>
                <Button variant="secondary" onClick={() => this.handleOrder(this.state)}>Place Order</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    state =>({}),
    {addorder}
)
(Cart);