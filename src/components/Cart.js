import React from 'react';
import cookie from 'react-cookies';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        for (var i = 1; i <= parseInt(cookie.load('orderNum')); i++) {
            console.log(JSON.parse(cookie.load('order' + i)));
        }
    }
    render() {
    	return(
    		<div>
                <section>
                </section>
            </div>
    	)
    }
}

export default Cart;