import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link as ReactLink} from "react-router-dom";






const NavbarComponent = () => {
  const path = process.env.REACT_APP_FOR_PATH;
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tasks App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          </Nav>
          <Nav>
            <Nav.Link >Logout</Nav.Link>
            
          </Nav>
          <div>
          <ReactLink to={path + “/”} >Home</ReactLink>
          </div>
         

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarComponent;