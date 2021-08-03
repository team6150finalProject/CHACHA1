import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainFooter from './components/MainFooter';
import MainNav from './components/MainNav';
import MainPage from './components/MainPage';
import ScrollToLocation from './components/ScrollToLocation';
import MilkTeaSelect from './components/MilkTeaSelect';
import FruitTeaSelect from './components/FruitTeaSelect';
import './App.css';
import Cart from "./components/Cart";
import SignInScreen from "./components/SigninScreen/SignInScreen";
import SignUpScreen from "./components/SigninScreen/SignUpScreen";
import Users  from "./components/User/Users";
import cookie from 'react-cookies';
import Order from './components/Order';

import AuthForLogin from '../src/utils/authForLogin';
import OrderHistory from "./components/User/OrderHistory";
import ProfileScreen from "./components/User/ProfileScreen";

import {connect} from "react-redux";
import {fetchData} from "./redux/actions";

import Auth from '../src/utils/auth'




class App extends React.Component {
  constructor(props) {
    super(props);
    if(!cookie.load('drinkNum'))
      cookie.save('drinkNum', 0, {path:"/"});
    if(!cookie.load('orderNum'))
      cookie.save('orderNum', 0, {path:"/"});
  }

  render() {
    const userData = this.props.user.userData;
    if (this.props.loginData.isAuth && Object.keys(userData).length === 0) {
      this.props.fetchData();
    }
    return (
      <BrowserRouter>
        <MainNav/>
        <ScrollToLocation />
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/order' component={Order}/>
            <Route exact path='/order/milkTea' component={Order}/>
            <Route exact path='/order/fruitTea' component={Order}/>
            <Route exact path='/order/specialtyDrinks' component={Order}/>
            <Route path='/order/milkTea/:productId' component={MilkTeaSelect}/>
            <Route path='/order/fruitTea/:productId' component={FruitTeaSelect}/>
            <Route path='/order/specialtyDrinks/:productId' component={FruitTeaSelect}/>
            
            <Route path='/cart' component={Auth(Cart)}/>
            <Route path='/signin' component={AuthForLogin(SignInScreen)}/>
            <Route path='/signup' component={AuthForLogin(SignUpScreen)}/>
            <Route path='/profile' component={Auth(ProfileScreen)}/>
            <Route path='/order-history' component={Auth(OrderHistory)}/>
            <Route path='/user' component={Auth(Users)}/>

        </Switch>
        <MainFooter/>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({
    user: state.fetchreducer,
    loginData: state.syncInfo
  }),
  {fetchData}
)(App);
