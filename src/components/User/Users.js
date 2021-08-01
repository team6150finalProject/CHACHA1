import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Favorites';
import OrderHistory from './OrderHistory';
import ProfileScreen from './ProfileScreen';
import Settings from './Settings';
import SideBar from './SideBar';
import './User.css';

class Users extends React.Component {
  render() {
    return (
      <div id="user-wrapper">
        <SideBar id="user-sidebar" />
        <div id="user-main">
          <Switch>
            <Route exact path='/user' component={ProfileScreen} />
            <Route path='/user/order-history' component={OrderHistory} />
            <Route path='/user/favorites' component={Favorites} />
            <Route path='/user/settings' component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Users;