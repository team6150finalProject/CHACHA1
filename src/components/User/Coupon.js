import React, {Component} from 'react';
import './coupon.css'
import {connect} from "react-redux";
import {fetchData} from "../../redux/actions";
import {reqGetCoupon} from "../../api";
class Coupon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coupons : [{
                _id: "",
                couponType: 0
            }]
        }
    }
    getCoupon = async () => {
        if (this.props.loginData.userData.isadmin) {
            const data ={
                isadmin: this.props.loginData.userData.isadmin
            }
            const response = await reqGetCoupon(data)
            const result =response.data
            alert(result.msg)
        } else {
            alert('You are not member')
        }
    }
    componentDidMount(){
        const userData = this.props.loginData.userData;
        this.setState({coupons: userData.coupon});
    }

    formatOrderCards = () => {
        if(this.state.coupons){
            return this.state.coupons.map((coupon, index) => {
                  if (this.state.coupons[index].couponType === 1) {
                      return (
                          <div className='coupon'>
                              <div className='coupon_left'>
                                  <span>$ 2.00</span>
                                  <br/>
                                  <button>
                                      Use
                                  </button>
                              </div>
                              <div className='coupon_right'>
                        <span>
                          Membership Coupon #1
                        </span>
                                  <br/>
                                  <span style={{color: 'white'}}>
                          $2 discount for consumption over $10
                        </span>
                              </div>
                          </div>
                      )
                  } else if (this.state.coupons[index].couponType === 2){
                      return (
                          <div className='coupon'>
                              <div className='coupon_left'>
                                  <span>Free Drink</span>
                                  <br/>
                                  <button>
                                      Use
                                  </button>
                              </div>
                              <div className='coupon_right'>
                        <span>
                          Membership Coupon #2
                        </span>
                                  <br/>
                                  <span style={{color: 'white'}}>
                          Get Free Drink for 1
                        </span>
                              </div>
                              <br/>
                          </div>
                      )
                  }
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Coupon</h1>
                <hr/>
                <button onClick={this.getCoupon}>Click me to get coupons</button>
                <hr/>
                {this.formatOrderCards()}
            </div>
        );
    }
}

export default connect(
    state=>({loginData : state.fetchreducer
    }),
    {fetchData}
)(Coupon);
