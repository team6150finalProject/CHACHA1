import React from 'react';
import {Link} from "react-router-dom";

const OrderCard = ({reading}) => {
    console.log(reading);
    return (
        <div className="card">
            <div className="card-header">
                Order on: {reading.timemillis}   Total: ${reading.totalprice}
                <div className="headerLink">
                    <Link to="">View Detail</Link>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">Order Complete </h4>
                <img className="orderImg" src={"../../img/"+reading.products[0].name+".jpg"} />
                <p className="card-text"></p>
            </div>
            <div className="card-footer">
                <button>Order Again</button>
            </div>
        </div>
    );
}


export default OrderCard;