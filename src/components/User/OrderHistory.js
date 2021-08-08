import React from 'react';
import {connect} from "react-redux";
import {fetchData} from "../../redux/actions";
import OrderCard from "./OrderCard"




class OrderHistory extends React.Component {
//{timemillis, subtotal, discount, price, pickUp, location, usedCoupon, products}
    constructor(props) {
        super(props);
        this.state = {
            orders: [{
                _id: "",
                timemillis: 0,
                subtotal: 0,
                discount: 0,
                totalPrice: 0,
                pickUp: true,
                location: "",
                usedCoupon: 0,
                products: [{
                    _id: "",
                    name: "",
                    size: "",
                    price: 0,
                    ice: "",
                    sweetness: "",
                    extras:"",
                    quantity: 0
                }]
            }]
        }
    }

    componentDidMount(){
        const userData = this.props.user.userData;
        this.setState({orders: userData.orders});
    }

    formatOrderCards = () => {
        if(this.state.orders){
            return this.state.orders.slice(0).reverse().map((reading, index) => <OrderCard reading={reading} key={index} />)
        }
    }

    render() {
        return (
            <div>
                <div className="userScreen">
                    <h1>Order History</h1>
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