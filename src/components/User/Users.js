import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Favorites';
import OrderHistory from './OrderHistory';
import ProfileScreen from './ProfileScreen';
import Settings from './Settings';
import SideBar from './SideBar';
import Auth from '../../utils/auth';
import './User.css';
import Auth from "../../utils/auth";

class Users extends React.Component {
  render() {
    return (
      <div id="user-wrapper">
        <SideBar id="user-sidebar" />
        <div id="user-main">
          <Switch>
            <Route exact path='/user' component={Auth(ProfileScreen)} />
            <Route path='/user/order-history' component={Auth(OrderHistory)} />
            <Route path='/user/favorites' component={Auth(Favorites)} />
            <Route path='/user/settings' component={Auth(Settings)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Users;