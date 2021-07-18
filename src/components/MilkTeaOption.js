import React from 'react';
import products from '../model/products';

class MilkTeaOption extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            price : 0,
            value:'coconut',
            size :'Select your option',
        };

        this.setSize = this.setSize.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setSize(event) {
        if (event.target.value == "regular") {
            this._price.innerHTML = "$4.49";
            this.setState({price: 4.49});
        }
        else if (event.target.value == "large") {
            this._price.innerHTML = "$4.99";
            this.setState({price: 4.99});
        }
        else {
            this._price.innerHTML = "$4.49 - $4.99";
            // this.setState({size: event.target.value});
        }
        this.setState({size: event.target.value});
    }

    handleSubmit(event) {
        alert('your size: ' + this.state.size);
        alert('your price: ' + this.state.price);
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
                      }>$4.49 - $4.99</h2>
                <br />

                <h6>Select an option <span style={{color: "red"}}>*</span>:</h6>
                <select value={this.state.size}  required="required" onChange={this.setSize} >
                    <option value="Select your option" disabled >Select your option</option>
                    <option value="regular" >Regular</option>
                    <option value="large">Large</option>
                </select>
                <br /><br />


                <h6>Ice Level:</h6>
                <input type="radio" id="regulerIce" name="ice" value="Regular ice" checked /><label for="regulerIce">Regular Ice</label>
                <br />
                <input type="radio" id="lessIce" name="ice" value="Less ice" /><label for="lessIce">Less Ice</label>
                <br />
                <input type="radio" id="noIce" name="ice" value="No ice" /><label for="noIce">No Ice</label>
                <br />
                <input type="radio" id="moreIce" name="ice" value="More ice" /><label for="moreIce">More Ice</label>
                <br />
                <input type="radio" id="hot" name="ice" value="hot" /><label for="hot">Hot</label>
                <br />
                <br />


            <input type="submit" value="提交" />


            </form>    
        )
    }
}


export default MilkTeaOption;