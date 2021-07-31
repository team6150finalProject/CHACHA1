import React from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut} from "../redux/actions";
import NavDropdown from "react-bootstrap/NavDropdown";
import cookie from 'react-cookies';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      account:cookie.load('emailid')
    };
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.handleClose();
  }

  render() {
    return (
      <div>
        {this.props.loginData.isAuth?
            <div>

              <NavDropdown  title={this.props.loginData.user.username}>
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="/order-history">Order History</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={this.props.logOut}>Logout</NavDropdown.Item>
              </NavDropdown>

            </div>
            :<Button className="btn-default" ><Link to='/signin' style={{ color: "#616161", textDecoration:'none'}}>SIGN IN</Link></Button>
        }


      {/*  <Modal show={this.state.show} onHide={() => this.handleClose()}>*/}
      {/*    <Modal.Header closeButton>*/}
      {/*      <Modal.Title>Please enter your credentials</Modal.Title>*/}
      {/*    </Modal.Header>*/}
      {/*    <Modal.Body>*/}
      {/*      <form onSubmit={(e) => this.onSubmit(e)}>*/}
      {/*        <div className="mb-3">*/}
      {/*          <label for="email_addr" className="form-label">Email address</label>*/}
      {/*          <input type="email" className="form-control" id="email_addr" />*/}
      {/*        </div>*/}
      {/*        <div className="mb-3">*/}
      {/*          <label for="pwd" className="form-label">Password</label>*/}
      {/*          <input type="password" className="form-control" id="pwd" />*/}
      {/*        </div>*/}
      {/*        <div className="mb-3 form-check">*/}
      {/*          <input type="checkbox" className="form-check-input" id="remember_me"></input>*/}
      {/*          <label className="form-check-label" for="remember_me">Remember me</label>*/}
      {/*        </div>*/}
      {/*        <button type="submit" className="btn-default">Sign in</button>*/}
      {/*      </form>*/}
      {/*    </Modal.Body>*/}
      {/*  </Modal>*/}
      </div>
    );
  }
}




export default connect(
    state=>({loginData : state.syncInfo}),
    {logOut}
)(SignIn);