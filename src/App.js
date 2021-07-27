import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainFooter from './components/MainFooter';
import MainPage from './components/MainPage';
import ScrollToLocation from './components/ScrollToLocation';
import TeaSelect from './components/TeaSelect';
import './App.css';
import SignInScreen from "./components/SigninScreen/SignInScreen";
import SignUpScreen from "./components/SigninScreen/SignUpScreen";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToLocation />
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/tea-select/:productId' component={TeaSelect}/>
            <Route path='/signin' component={SignInScreen}/>
            <Route path='/signup' component={SignUpScreen}/>
        </Switch>
        <MainFooter/>
      </BrowserRouter>
    );
  }
}

export default App;
