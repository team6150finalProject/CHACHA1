import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainFooter from './components/MainFooter';
import MainNav from './components/MainNav';
import MainPage from './components/MainPage';
import ScrollToLocation from './components/ScrollToLocation';
import TeaSelect from './components/TeaSelect';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToLocation />
        <MainNav></MainNav>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/tea-select/:productId' component={TeaSelect}/>
        </Switch>
        <MainFooter></MainFooter>
      </BrowserRouter>
    );
  }
}

export default App;
