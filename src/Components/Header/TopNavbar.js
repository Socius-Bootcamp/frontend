import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { id: 1, name: "Urban" },
  { id: 2, name: "Basket" },
  { id: 3, name: "Skate" },
  { id: 4, name: "Running"},
  { id: 5, name: "Training"},
  { id: 6, name: "Futbol"}
];


const TopNavbar = () => {
  //const { categories } = useSelector((state) => state.categories);
  const cart= useSelector((state) => state.cart);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Cheap Nike
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((category, index) => {
                  return (
                    <Link
                      to={`/Category/${category.name}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {category.name}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to="/Products" className="nav-link">
              Zapatillas
            </NavLink>
            <NavLink to="/shoes" className="nav-link">
              Administrar Productos
            </NavLink>
            <NavLink to="/orders" className="nav-link">
              Administrar Ordenes
            </NavLink>
            <NavLink to="/Cart" className="nav-link">
                Cart ({cart.CartItems.length})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
