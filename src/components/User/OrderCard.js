import React from 'react';
import {Link} from "react-router-dom";
import productInfo from "../../model/productInfo.json"


const OrderCard = ({reading}) => {

    let productsInfo =  productInfo.products;

    for(var i=0; i<reading.products.length; i++){
        for(var j=0; j<productsInfo.length; j++){
            if(productsInfo[j].title == reading.products[i].name){
                reading.products[i].imgFile = productsInfo[j].imgFileName;
            }
        }
    }
    let imgFile;

    if(reading.products[2]){
        imgFile = <div>
            <img className="orderImg" src={"../../../img/" + reading.products[0].imgFile} />
            <img className="orderImg" src={"../../../img/" + reading.products[1].imgFile} />
            <img className="orderImg" src={"../../../img/ellipsis.png"} />
        </div>
    } else if(reading.products[1]){
        imgFile = <div>
            <img className="orderImg" src={"../../../img/" + reading.products[0].imgFile} />
            <img className="orderImg" src={"../../../img/" + reading.products[1].imgFile} />
        </div>
    } else {
        imgFile = <img className="orderImg" src={"../../../img/" + reading.products[0].imgFile} />
    }


    return (
        <div className="card">
            <div className="card-header">
                Order on: {reading.timemillis}   Total: ${reading.totalprice}
                <div className="headerLink">
                    <Link to={ {pathname:'/user/order-detail', query:{products: reading.products}}}>View Detail</Link>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">Order Complete </h4>
                {imgFile}
                <p className="card-text"></p>
            </div>
            <div className="card-footer">
                <button>Order Again</button>
            </div>
        </div>
    );
}


export default OrderCard;