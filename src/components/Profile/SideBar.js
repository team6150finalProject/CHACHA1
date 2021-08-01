import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './SideBar.css';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ListGroup>
          <ListGroup.Item as="li"><Link className='sidebar-link' to='/profile'>Profile</Link></ListGroup.Item>
          <ListGroup.Item as="li"><Link className='sidebar-link' to='/profile'>Favorites</Link></ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default SideBar;