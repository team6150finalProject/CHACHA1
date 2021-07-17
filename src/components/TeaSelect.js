import React from 'react';
import products from '../model/products';

class TeaSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.match.params.productId
    };
  }

  render() {
    const productInfo = products.getProductInfo(this.state.productId);
    if (!productInfo) { return (<div>Product not found</div>);}
    return (
      <div id="select-content">
        <img id="select-picture" src={ "../../img/" + productInfo.imgFileName } alt={this.productId} />
        <form id="select-options" method="post" >
          <h2>{ productInfo.title }</h2>
          <h2 id="price">{ productInfo.price }</h2>
          <br />

          <h6>Select an option <span style={{color: "red"}}>*</span>:</h6>
          <select id="size" required="required">
            <option value="" disabled selected hidden>Select your option</option>
            <option value="reguler" >Regular</option>
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

          <h6>Sweetness Level:</h6>
          <input type="radio" id="standardSweet" name="sweet" value="Standard Sweet" checked /><label for="regulerIce"> 50% Standard Sweet</label>
          <br />
          <input type="radio" id="lessSweet" name="sweet" value="Less Sweet" /><label for="lessSweet"> 25% Less Sweet</label>
          <br />
          <input type="radio" id="moreSweet" name="sweet" value="More Sweet" /><label for="moreSweet"> 75% More Sweet</label>
          <br />
          <input type="radio" id="superSweet" name="sweet" value="Super Sweet" /><label for="superSweet"> 100% Super Sweet</label>
          <br />
          <input type="radio" id="noSweet" name="sweet" value="No Sweet" /><label for="noSweet"> 0% No Sweet</label>
          <br />
          <br />

          <h6>Extra Topping:</h6>
          <p><input type="checkbox" name="topping" value="Pearl" />Pearl(+ $0.50)</p>
          <p><input type="checkbox" name="topping" value="Grass Jelly" />Grass Jelly(+ $0.50) </p>
          <p><input type="checkbox" name="topping" value="Egg Pudding" />Egg Pudding(+ $0.50)</p>
          <p><input type="checkbox" name="topping" value="Aiyu" />Aiyu(+ $0.50)</p>
          <p><input type="checkbox" name="topping" value="Salted Cheese Cream" />Salted Cheese Cream(+ $0.50)</p>
          <p><input type="checkbox" name="topping" value="Tiramisu Cream" />Tiramisu Cream(+ $0.50)</p>
          <br />

          <h6>Quantity <span style={{color: "red"}}>*</span>:</h6>
          <select id="quantity" required="required">
            <option value="" disabled selected hidden>Select the quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <br /><br />

          <input type="submit" id="select-addCart" value="+ Add to cart" />

        </form>
      </div>
    );
  }
}

export default TeaSelect;