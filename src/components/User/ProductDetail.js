import React from 'react';
import {Link} from "react-router-dom";



const ProductDetail = ({reading}) => {
    console.log(reading);
    return (
        <div className="productDetail">
            <div className="card-body">
                <img className="detailImg" src={"../../img/" + reading.name + ".jpg"}/>
                <h5 className="productName">{reading.name}</h5>
                <h5 className="productDescription">{reading.size} / {reading.ice} / {reading.sweetness} /
                    "{reading.extras}"</h5>
                <h5 className="quantity">x{reading.quantity}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    );
}
export default ProductDetail;