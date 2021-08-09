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
            }],
            flag: 0,
            from: 0,
            end: 5
        }
    }

    componentDidMount(){
        const userData = this.props.user.userData;
        this.setState({orders: userData.orders});
    }

    changePage(page){
        const NUM = 5;
        if(page == -1){ //previous
            if(this.state.flag <= 0){
                this.state.flag = 0;
            }else {
                this.state.flag = this.state.flag - 1;
            }
            this.state.from = this.state.flag*NUM;
            this.state.end = this.state.from + NUM;
        }else { //next
            if(this.state.orders.length % NUM == 0){
                if(this.flag >= this.state.orders.length/NUM -1){
                    this.state.flag = this.state.orders.length/NUM - 1;
                }else {
                    this.state.flag = this.state.flag + 1;
                }
                this.state.from = this.state.flag*NUM;
                this.state.end = this.state.from + NUM;
            }else{ //%NUM != 0
                if(this.flag >= Math.floor(this.state.orders.length/NUM)){
                    this.state.flag = Math.floor(this.state.orders.length/NUM);
                }else {
                    this.state.flag = this.state.flag + 1;
                }
                this.state.from = this.state.flag*NUM;
                this.state.end = this.state.from + NUM;
            }
        }
        this.setState({flag:this.state.flag, from: this.state.from, end: this.state.end});
    }


    formatOrderCards = () => {
        if(this.state.orders){
            return this.state.orders.slice().reverse().slice(this.state.from,this.state.end).map((reading, index) => <OrderCard reading={reading} key={index} />)
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
                                    <li><a href="javascript:void(0)" onClick={()=>this.changePage(-1)}>Previous</a></li>
                                    <li><a href="/" >1</a></li>
                                    <li><a href="/" >2</a></li>
                                    <li><a href="javascript:void(0)" onClick={()=>this.changePage(1)}>Next</a></li>
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