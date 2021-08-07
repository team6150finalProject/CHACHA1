import React from 'react';
import {connect} from "react-redux";
import {fetchData} from "../redux/actions";
import OrderCard from "./User/OrderCard";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
class ConfirmationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: {
                timemillis: 0,
                price: 0,
                location: "",
                products: [{
                    name: "",
                    size: "",
                    price: "",
                    ice: "",
                    sweetness: "",
                    extras: [],
                    quantity: ""
                }]
            },
            profile: {
                firstname: "",
                lastname: "",
                phone: "",
                address: "",
            }
        }
    }
    createOrder(data, actions) {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: 'purchase',
                    amount: {
                        value: this.state.order.price,
                    },
                },
            ],
        });
    }
    onApprove(data, actions) {

        return actions.order.capture();
    }

    componentDidMount(){
        const orderData = this.props.location.state.order;
        const userData = this.props.user.userData;
        console.log("Mount");
        console.log(userData);
        if(orderData && userData.profile){
            this.setState({order: orderData});
            this.setState({profile: userData.profile});
        }
        console.log(this.state);
    }

    render() {
        console.log("render");
        console.log(this.state);

        const listProducts = this.state.order.products.map((products) =>
            <div>
                <p className="inlineP">{products.name}, </p>
                <p className="geryP">{products.size} size, {products.ice}, {products.sweetness}, x{products.quantity}</p>
            </div>
        );

        return (
            <div className="container-confirm">
                <div className="card" id="LocationConfirm">
                    <div className="card-body">
                        <h6>Pick-Up from</h6>
                        <h3>Street</h3>
                        <h6>{this.state.order.location} </h6>
                    </div>
                </div>

                <div className="card" id="PickUpConfirm">
                    <div className="card-body">
                        <h4>Pick-Up ASAP</h4>
                        <hr className="solid"></hr>
                        <h4>Contact Information</h4>
                        <h6>{this.state.profile.firstname} {this.state.profile.lastname}, {this.state.profile.phone}</h6>
                    </div>
                </div>

                <div className="card" id="PickUpConfirm">
                    <div className="card-body">
                        <h4>Choose Your Coupon</h4>
                        <hr className="solid"></hr>
                        <select id="selectCoupon">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>

                <div className="card" id="ProductsConfirm">
                    <div className="card-body">
                        <h4>Your Order</h4>
                        <hr className="solid"></hr>
                        <p>{listProducts}</p>
                        <hr className="solid"></hr>
                        <p>Subtotal</p>
                        <p>Discounts</p>
                        <h4 className="priceConfirm1">Total</h4>
                        <h4 className="priceConfirm2">${this.state.order.price}</h4>
                    </div>
                </div>

                <div className="card" id="paymentConfirm">
                    <div className="card-body">
                        <h4>Select Payment Method</h4>
                        <div className='paypal-button'>
                            <PayPalButton
                                createOrder={(data, actions) => this.createOrder(data, actions)}
                                onApprove={(data, actions) => this.onApprove(data, actions)}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default connect(
    state => ({user: state.fetchreducer}),
    {fetchData}
)(ConfirmationPage);
