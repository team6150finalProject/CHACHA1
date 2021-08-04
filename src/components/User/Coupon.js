import React, {Component} from 'react';
import './coupon.css'
class Coupon extends Component {
    render() {
        return (
            <div>
                <h1>Coupon</h1>
                <div className= 'coupon'>
                    <div className='coupon_left'>
                        <span>$ 2.00</span>
                        <br/>
                        <button>
                            Use
                        </button>
                    </div>
                    <div className='coupon_right'>
                        <span>
                          Membership Coupon
                        </span>
                        <br/>
                        <span style={{color: 'white'}}>
                          $2 discount for consumption over $10
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Coupon;