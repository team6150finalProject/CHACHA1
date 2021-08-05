import React from 'react';
import {connect} from "react-redux";
import {fetchData} from "../../redux/actions";
import OrderCard from "./OrderCard"




class OrderHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [{
                orderid: "",
                timemillis: 0,
                totalprice: 0,
                products: [{
                    name: "",
                    size: "",
                    ice: "",
                    sweetness: "",
                    extras:"",
                    quantity: 0
                }]
            }]
        }
    }

    formatOrderCards = () => {
        return this.orders.map((reading, index) => <OrderCard reading={reading} key={index} />)
    }

    render() {
        const userData = this.props.user.userData;
        this.orders = [{
            orderId: "001",
            timemillis: "08-02-2021",
            totalprice: 20,
            products: [{
                name: "berryTea",
                size: "small",
                ice: "ice",
                sweetness: "sweet",
                extras:"ex",
                quantity: 1
            },
                {
                    name: "berryTea",
                    size: "",
                    ice: "",
                    sweetness: "",
                    extras:"",
                    quantity: 0
                },
            ]
        },
            {
                orderId: "002",
                timemillis: "08-02-2021",
                totalprice: 10,
                products: [{
                    name: "bubbleTea",
                    size: "",
                    ice: "",
                    sweetness: "",
                    extras:"",
                    quantity: 0
                }]
            },
            {
                orderid: "003",
                timemillis: "07-31-2021",
                totalprice: 30,
                products: [{
                    name: "mangoTea",
                    size: "",
                    ice: "",
                    sweetness: "",
                    extras:"",
                    quantity: 0
                }]
            }
        ];

        return (
            <div>
                <div className="userScreen">
                    <h2>Order History</h2>
                    <div>
                        <div className="content-warp">
                            <nav id="order_history_nav"><b>
                                <a href="">All Your Orders</a>
                                <a href="">Write review</a>
                                <a href="">Cancelled Orders</a>
                            </b></nav>
                            <div className="orderContainer">

                                <div>
                                    {this.formatOrderCards()}
                                </div>

                            </div>
                            <div className="nextPage">
                                <ul>
                                    <li><a href="/" >Previous</a></li>
                                    <li><a href="/" >1</a></li>
                                    <li><a href="/" >2</a></li>
                                    <li><a href="/" >Next</a></li>
                                </ul>
                            </div>
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
)(OrderHistory);