import React from 'react';
import {Link} from "react-router-dom";
import productInfo from "../model/productInfo.json"

const CartCard = ({reading}) => {
    console.log("reading:" + reading);
    var products = productInfo.products;
    var imgFile = "";
    for (var i = 0; i < products.length; i++) {
        if (products[i].title === reading.product) {
            imgFile = products[i].imgFileName;
            break;
        }
    }
    return (
        <div className="card" style={{width: "540px"}}>
            <div className="card-body">
                <h4 className="card-title">{reading.product}</h4>
                <img className="orderImg" src={"../../img/" +imgFile} />
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