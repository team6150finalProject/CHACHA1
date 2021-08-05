import React from 'react';

class ConfirmationPage extends React.Component {

    constructor(props) {

        super(props);

        //this.orders = this.props.history.location.query.orders;
        //console.log(this.orders);
        this.orders = {
            orderId: "001",
            timemillis: "08-02-2021",
            totalprice: 20,
            products: [{
                name: "berryTea",
                size: "small",
                ice: "ice",
                sweetness: "sweet",
                extras: "ex",
                quantity: 1
            }]
        };
        this.location = "75 Service St, San Jose, CA 95112";
    }

    render() {
        return (
            <div className="container-confirm">
                <div className="card" id="LocationConfirm">
                    <div className="card-body">
                        <h6>Pick-Up from</h6>
                        <h3>Street</h3>
                        <h6>{this.location} </h6>
                    </div>
                </div>

                <div className="card" id="PickUpConfirm">
                    <div className="card-body">
                        <h4>Pick-Up time</h4>
                        <hr className="solid"></hr>
                        <h4>Contact Information</h4>
                        <h6>name, phone</h6>
                    </div>
                </div>

                <div className="card" id="paymentConfirm">
                    <div className="card-body">
                        <h4>Select Payment Method</h4>
                        <hr className="solid"></hr>
                        <h5 id="selectPayment">Paypal</h5>
                        <input type="radio" id="selectPayment2"/>
                        <hr className="solid"></hr>
                        <h5 id="selectPayment">Pay with credit card</h5>
                        <input type="radio" id="selectPayment2"/>
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
                        <p>{this.orders.products[0].name}</p>
                        <hr className="solid"></hr>
                        <p>Subtotal</p>
                        <p>Discounts</p>
                        <h4 className="priceConfirm1">Total</h4>
                        <h4 className="priceConfirm2">${this.orders.totalprice}</h4>
                    </div>
                </div>

            </div>
        );
    }
}

export default ConfirmationPage;