import React from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

class MainNav extends React.Component {
    render() {
      return (
        <Navbar fixed="top" expand="lg" variant="dark" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/welcome.jpg)" }}>
          <Container>
            <Navbar.Brand href="#">
              <Image src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="logo" width="70" height="70" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="navbarSupportedContent" style={{ marginLeft: "3%" }}>
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Item>
                  <Nav.Link active aria-current="page" href="home.html">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Menu">
                  <NavDropdown.Item href="#milkTea">Milk Tea</NavDropdown.Item>
                  <NavDropdown.Item href="#fruitTea">Fruit Teaa</NavDropdown.Item>
                  <NavDropdown.Item href="#specialty">Specialty Drinks</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="#findStore">Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#tea-gallery">Online Order</Nav.Link>
                </Nav.Item>
              </Nav>
              <Form className="d-flex">
                <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                <a className="btn btn-default" data-bs-toggle="tooltip" data-bs-placement="bottom" title="search" href="#" role="button">
                  <i className="fas fa-search" style={{ color: "#616161" }}></i>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a className="btn btn-default" data-bs-toggle="tooltip" data-bs-placement="bottom" title="shopping cart" href="#" role="button">
                  <i className="fas fa-shopping-cart fa-lg" style={{ color: "#616161" }}></i>
                </a>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }

  export default MainNav;