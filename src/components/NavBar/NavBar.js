import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./NavBar.css"




function Navibar() {
  return (
    <Navbar className="color-nav" bg="info" variant="dark" expand="lg">
    <Navbar.Brand href="/">Lauren Penenburgh</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mr-auto"
        
      >
        <NavLink className="nav-link" to="/">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navibar;
