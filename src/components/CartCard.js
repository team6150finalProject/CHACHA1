import React from 'react';
import {Link} from "react-router-dom";

const CartCard = ({reading}) => {
    console.log(reading);
    return (
        <div className="card" style={{width: "540px"}}>
            <div className="card-body">
                <h4 className="card-title">{reading.product}</h4>
                <img className="orderImg" src={"../../img/"+reading.product.replace(/\s/g, '')+".jpg"} />
                <div style={{display: "inline-block"}}>
                <p className="card-text">
                    Size: {reading.size}
                </p>
                <p className="card-text">
                    Ice Level: {reading.size}
                </p>
                <p className="card-text">
                    Sweetness Level: {reading.sweet}
                </p>
                <p className="card-text">
                    Quantity: {reading.qty}
                </p>
                </div>
            </div>
            <div className="card-footer">
                <div>Price: ${reading.price}</div>
                <button>Delete</button>
            </div>
        </div>
    );
}


export default CartCard;