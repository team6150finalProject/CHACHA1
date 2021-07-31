import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class OrderTea extends Component {

    render() {
        var cardStyle = {
            width : '20rem',
            marginTop: '1rem' 
        }

        var imgStyle = {
            width : '20rem',
            height : '25rem',
        }

        var hStyle = {
            marginLeft: '30px',
            marginTop:'20px'
        }
        return (

            <div>
                <h1 id = "milkTeaOrder" style = {hStyle}>Milk Tea</h1>
                <div className = "products">
                    {this.props.products.slice(0, 3).map(product => (
                        <Card  key={product.title} className = "product" style={cardStyle}>
                            <img style = {imgStyle} src= {"../../img/" + product.imgFileName} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="mb-2 text-muted">
                                    {product.description}
                                </Card.Text>
                                <Card.Title>
                                    {product.price}
                                </Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <h1 id = "fruitTeaOrder" style = {hStyle} >Fruit Tea</h1>
                <div className = "products">
                    {this.props.products.slice(3, 6).map(product => (
                        <Card key={product.title} className = "product" style={cardStyle}>
                            <img style = {imgStyle} src= {"../../img/" + product.imgFileName} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="mb-2 text-muted">
                                    {product.description}
                                </Card.Text>
                                <Card.Title>
                                    {product.price}
                                </Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <h1 id = "specialOrder" style = {hStyle} >Specialty Drinks</h1>
                <div  className = "products">
                    {this.props.products.slice(6, 9).map(product => (
                        <Card key={product.title} className = "product" style={cardStyle}>
                            <img style = {imgStyle} src= {"../../img/" + product.imgFileName} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="mb-2 text-muted">
                                    {product.description}
                                </Card.Text>
                                <Card.Title>
                                    {product.price}
                                </Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

            </div>


            
        )
    }

}


export default OrderTea;