import React from 'react';
import { Link } from 'react-router-dom';
import products from '../model/products';

import { reqUpdateFavorite } from "../api";

import {connect} from "react-redux";
import {fetchData} from "../redux/actions";

class ProductCard extends React.Component {
  toggleFavorite() {
    let favorites = this.props.user.userData.favorites;
    const isFavorite = favorites.includes(this.props.productId);
    reqUpdateFavorite({ product: this.props.productId, isFavorite: !isFavorite})
      .then(response => {
        this.props.fetchData();
      });
  }
  render() {
    const productInfo = products.getProductInfo(this.props.productId);
    let favorites = this.props.user.userData.favorites;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{productInfo.title}</h4>
          {this.props.loginData.isAuth ? <img className="favorite-icon"
               src={process.env.PUBLIC_URL + "/img/" + (favorites && favorites.includes(this.props.productId) ? "heart-solid.png" : "heart-empty.png")}
               onClick={this.toggleFavorite.bind(this)}/> : null}
        </div>

        <Link to={'/order/' + productInfo.type + "/"+ this.props.productId} title="click to order">
          <img className="tea" src={process.env.PUBLIC_URL + "/img/" + productInfo.imgFileName} alt="#" />
        </Link>

      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.fetchreducer,
    loginData: state.syncInfo
  }),
  {fetchData}
)(ProductCard);