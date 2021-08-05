import React from 'react';
import cookie from 'react-cookies';
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
                <button onClick={() => {
                    var n = parseInt(cookie.load('orderNum'));
                    for (var i = reading.index; i < n; i++) {
                        cookie.save('order' + i, cookie.load('order' + (i+1)), {path:"/"});
                    }
                    cookie.remove('order' + n);
                    cookie.save('drinkNum', parseInt(cookie.load('drinkNum')) - parseInt(reading.qty), {path:"/"});
                    cookie.save('orderNum', n - 1, {path:"/"});
                    window.open("/cart", "_self");
                }}>Delete</button>
            </div>
        </div>
    );
}


export default CartCard;