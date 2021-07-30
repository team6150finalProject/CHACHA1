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
import cookie from 'react-cookies';
import Order from './components/Order';


class App extends React.Component {
  constructor(props) {
    super(props);
    if(!cookie.load('drinkNum'))
      cookie.save('drinkNum', 0, {path:"/"});
    if(!cookie.load('orderNum'))
      cookie.save('orderNum', 0, {path:"/"});
  }
  render() {
    return (
      <BrowserRouter>
        <MainNav/>
        <ScrollToLocation />
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/tea-select/milkTea/:productId' component={MilkTeaSelect}/>
            <Route path='/tea-select/fruitTea/:productId' component={FruitTeaSelect}/>
            <Route path='/tea-select/specialtyDrinks/:productId' component={FruitTeaSelect}/>
            <Route path='/order' component={Order}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/signin' component={SignInScreen}/>
            <Route path='/signup' component={SignUpScreen}/>
        </Switch>
        <MainFooter/>
      </BrowserRouter>
    );
  }
}

export default App;
