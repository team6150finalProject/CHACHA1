import React from 'react';
import ProductDetail from "./ProductDetail"




class OrderDetail extends React.Component {

    constructor(props) {

        super(props);

        this.products = this.props.history.location.query.products;
        console.log(this.products);
    }

    formatProductCards = () => {
        return this.products.map((reading, index) => <ProductDetail reading={reading} key={index} />)
    }

    render() {
        return (
            <div>
                <div className="userScreen">
                    <h2>Order Detail</h2>
                    <div>
                        <div className="content-warp">

                            <div className="orderContainer">
                                <div className="card">
                                    <div className="card-header">
                                        Order Complete
                                        <div className="headerLink">

                                        </div>
                                    </div>
                                    <div>
                                        {this.formatProductCards()}
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetail;