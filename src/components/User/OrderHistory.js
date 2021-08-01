import React from 'react';
import UserCard from "./UserCard";
import {Link} from "react-router-dom";


class OrderHistory extends React.Component {
    render() {
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
                                <div className="card">
                                    <div className="card-header">
                                        Order on: March 24, 2021   Total: $10
                                        <div className="headerLink">
                                            <Link to="">View Detail</Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Order Complete </h4>
                                        <img className="orderImg" src="../../img/p7.jpg" />
                                        <img className="orderImg" src="../../img/p7.jpg" />
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <button>Order Again</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        Order on: March 24, 2021   Total: $10
                                        <div className="headerLink">
                                            <Link to="">View Detail</Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Order Complete </h4>
                                        <img className="orderImg" src="../../img/p6.jpg" />
                                        <img className="orderImg" src="../../img/p2.jpg" />
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <button>Order Again</button>
                                    </div>
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

export default OrderHistory;