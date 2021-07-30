import React from 'react';
import cookie from 'react-cookies';
import productInfo from "../model/productInfo.json"
import OrderTea from './orderTea';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AutoComplete } from 'antd';
import { Navbar } from 'react-bootstrap';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo : productInfo.products
        }

    }
    
    render() {

        // var navStyle = {
        //     textAlign: 'center',
        //     marginLeft: 'auto'
        // }
        return (
            <div>
                <div  className = "orderNav">
                    <Nav variant="dark" defaultActiveKey="/order/#milkTeaOrder" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/order/#milkTeaOrder"><h4 className="linkText">Milk Tea</h4></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/order/#fruitTeaOrder"><h4 className="linkText">Fruit Tea</h4></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/order/#specialOrder"><h4 className="linkText">Specialty Drinks</h4></Nav.Link>
                    </Nav.Item>
                    </Nav>
                </div>
                
                <div className = "teaContent">
                    <OrderTea products = {this.state.productInfo}/>
                </div>

            </div>
            
        )
    }
}


export default Order;