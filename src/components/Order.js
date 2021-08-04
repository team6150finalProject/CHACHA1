import React from 'react';
import productInfo from "../model/productInfo.json"
import OrderMilkTea from './orderMilkTea';
import OrderFruitTea from './orderFruitTea';
import OrderSpecial from './orderSpecial';
import { Tab, Tabs } from 'react-bootstrap';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo : productInfo.products
        }

    }
    
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="all"  className="mb-3">
                    <Tab eventKey="all" title="ALL">
                        <div className = "teaContent">
                            <OrderMilkTea products = {this.state.productInfo}/>
                            <OrderFruitTea products = {this.state.productInfo}/>
                            <OrderSpecial products = {this.state.productInfo}/>
                        </div>
                    </Tab>
                    <Tab eventKey="milk" title="Milk Tea" >
                        <div className = "teaContent">
                            <OrderMilkTea products = {this.state.productInfo}/>
                        </div>
                    </Tab>
                    <Tab eventKey="fruit" title="Fruit Tea" >
                        <div className = "teaContent">
                            <OrderFruitTea products = {this.state.productInfo}/>
                        </div>
                    </Tab>
                    <Tab eventKey="special" title="Specialty Drinks" >
                        <div className = "teaContent">
                            <OrderSpecial products = {this.state.productInfo}/>
                        </div>
                    </Tab>
                </Tabs>
                {/* <div  className = "orderNav">
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
                </div> */}
                
                {/* <div className = "teaContent">
                    <OrderTea products = {this.state.productInfo}/>
                </div> */}

            </div>
            
        )
    }
}


export default Order;