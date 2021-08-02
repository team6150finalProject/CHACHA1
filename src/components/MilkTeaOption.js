import React from 'react';
import Select from 'react-select';
import cookie from 'react-cookies';

import "./homeStyle.css"

const sizeOptions = [
    { value: "Regular", label: "Regular" },
    { value: "Large", label: "Large" },
  ];

const qtyOptions = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
];  

class MilkTeaOption extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            price : 4.49,
            size :"Regular",
            ice: 'Regular Ice',
            sweet: 'Standard Sweet',
            topping :[],
            qty: 1
        };

        this.setSize = this.setSize.bind(this);
        this.setIce = this.setIce.bind(this);
        this.setSweet = this.setSweet.bind(this);
        this.setQty = this.setQty.bind(this);
        this.handleTopping = this.handleTopping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    setSize(event) {
        if (event.value === "Regular") {
            this._price.innerHTML = "$4.49";
            this.setState({price: 4.49});
        }
        else if (event.value === "Large") {
            this._price.innerHTML = "$4.99";
            this.setState({price: 4.99});
        }
        this.setState({size: event.value});
    }

    setIce(event) {
        this.setState({ice:event.target.value });
    }

    setSweet(event) {
        this.setState({sweet:event.target.value});
    }

    setQty(event) {
        this.setState({qty:event.value});
    }

    handleTopping(event) {
        var oriTopping = this.state.topping;
        var updateTopping = [];
        if (event.target.checked) {
            var seltectTopping = event.target.value;
            this.setState({topping : [...this.state.topping, seltectTopping]});
        }
        else {
            for (var i = 0; i < oriTopping.length; i++) {
                if (oriTopping[i] === event.target.value) {
                    continue;
                }
                updateTopping.push(oriTopping[i]);
            }
            this.setState({topping:updateTopping});
        }
    }

    handleSubmit(event) {
        alert('Size: ' + this.state.size +'\nPrice: ' + this.state.price + '\nIce: '+ this.state.ice
              + '\nSweet: '+ this.state.sweet + '\nQty: ' + this.state.qty + '\nTopping: ' + this.state.topping);
        cookie.save('drinkNum', parseInt(cookie.load('drinkNum')) + parseInt(this.state.qty), {path:"/"});
        cookie.save('orderNum', parseInt(cookie.load('orderNum')) + 1, {path:"/"});
        cookie.save('order' + cookie.load('orderNum'), JSON.stringify(this.props.title + '\,' + this.state.size + '\,' + this.state.price + '\,'+ this.state.ice
                      + '\,'+ this.state.sweet + '\,' + this.state.qty + '\,' + this.state.topping), {path:"/"});
        window.open("/cart", "_self");
        event.preventDefault();
    }

    

    
    render() {
        var self = this;

        return (
            <form id="select-options" method="post" onSubmit={this.handleSubmit}>
                <h2>{ this.props.title}</h2>
                <h2 id="price" ref={
                        function(el) {
                          self._price= el;
                        }
                      }>$4.49</h2>
                <br />

                <h6>Select an option <span style={{color: "red"}}>*</span>:</h6>
                <Select options={sizeOptions} onChange={this.setSize}  defaultValue = {sizeOptions[0]}/>
                <br /><br />


                <h6>Ice Level:</h6>
                <input type="radio" id="regulerIce" name="ice" value="Regular Ice" checked={this.state.ice === 'Regular Ice'}  onChange={this.setIce}/><label htmlFor="regulerIce">Regular Ice</label>
                <br />
                <input type="radio" id="lessIce" name="ice" value="Less Ice" checked={this.state.ice === 'Less Ice'}  onChange={this.setIce}/><label htmlFor="lessIce">Less Ice</label>
                <br />
                <input type="radio" id="noIce" name="ice" value="No Ice" checked={this.state.ice === 'No Ice'}  onChange={this.setIce}/><label htmlFor="noIce">No Ice</label>
                <br />
                <input type="radio" id="moreIce" name="ice" value="More Ice" checked={this.state.ice === 'More Ice'}  onChange={this.setIce}/><label htmlFor="moreIce">More Ice</label>
                <br />
                <input type="radio" id="hot" name="ice" value="hot" checked={this.state.ice === 'hot'}  onChange={this.setIce}/><label htmlFor="hot">Hot</label>
                <br />
                <br />

                <h6>Sweetness Level:</h6>
                <input type="radio" id="standardSweet" name="sweet" value="Standard Sweet" checked={this.state.sweet === 'Standard Sweet'}  onChange={this.setSweet}/><label htmlFor="standardSweet"> 50% Standard Sweet</label>
                <br />
                <input type="radio" id="lessSweet" name="sweet" value="Less Sweet" checked={this.state.sweet === 'Less Sweet'}  onChange={this.setSweet}/><label htmlFor="lessSweet"> 25% Less Sweet</label>
                <br />
                <input type="radio" id="moreSweet" name="sweet" value="More Sweet" checked={this.state.sweet === 'More Sweet'}  onChange={this.setSweet}/><label htmlFor="moreSweet"> 75% More Sweet</label>
                <br />
                <input type="radio" id="superSweet" name="sweet" value="Super Sweet" checked={this.state.sweet === 'Super Sweet'}  onChange={this.setSweet}/><label htmlFor="superSweet"> 100% Super Sweet</label>
                <br />
                <input type="radio" id="noSweet" name="sweet" value="No Sweet" checked={this.state.sweet === 'No Sweet'}  onChange={this.setSweet}/><label htmlFor="noSweet"> 0% No Sweet</label>
                <br />
                <br />


                <h6>Extra Topping:</h6>
                <p><input type="checkbox" name="topping" value="Pearl" onChange={this.handleTopping}  checked = {this.state.topping.pearl}/>Pearl(+ $0.50)</p>
                <p><input type="checkbox" name="topping" value="RedBean"  onChange={this.handleTopping} checked = {this.state.topping.redBean}/>Red Bean(+ $0.50) </p>
                <p><input type="checkbox" name="topping" value="Egg Pudding"  onChange={this.handleTopping} checked = {this.state.topping.eggPudding}/>Egg Pudding(+ $0.50)</p>
                <p><input type="checkbox" name="topping" value="Aiyu"  onChange={this.handleTopping} checked = {this.state.topping.aiyu}/>Aiyu(+ $0.50)</p>
                <p><input type="checkbox" name="topping" value="Salted Cheese Cream"  onChange={this.handleTopping} checked = {this.state.topping.saltedCheeseCream}/>Salted Cheese Cream(+ $0.50)</p>
                <p><input type="checkbox" name="topping" value="Tiramisu Cream"  onChange={this.handleTopping} checked = {this.state.topping.tiramisuCream}/>Tiramisu Cream(+ $0.50)</p>
                <br />

                <h6>Quantity <span style={{color: "red"}}>*</span>:</h6>
                <Select options={qtyOptions} onChange={this.setQty}  defaultValue = {qtyOptions[0]}/>
                <br /><br />

            <input id = "addCart" type="submit" value="Add to Cart" />


            </form> 
            
            
        )
    }
}


export default MilkTeaOption;