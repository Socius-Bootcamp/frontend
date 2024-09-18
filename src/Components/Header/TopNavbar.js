import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand" >Cheap Nike</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link to="/Category/Urban" className="text-capitalize dropdown-item">
                    Urban
                </Link>
                <Link to="/Category/Basket" className="text-capitalize dropdown-item">
                    Basket
                </Link>
                <Link to="/Category/Skate" className="text-capitalize dropdown-item">
                    Skate
                </Link>
            </NavDropdown>
            <NavLink to="Products" className="nav-link">Zapatillas</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
