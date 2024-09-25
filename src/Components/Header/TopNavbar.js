import React from "react"; 
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../img/Nike.png'; // Asegúrate de que la ruta sea correcta

const categories = [
  { id: 1, name: "Urban" },
  { id: 2, name: "Basket" },
  { id: 3, name: "Skate" },
];

const TopNavbar = ({ showFullMenu }) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            src={logo} // Utiliza la imagen importada
            alt="Logo"
            style={{ height: '30px' }} // Ajusta la altura del logo según lo necesites
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {showFullMenu && (
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
                        to={`/category/${category.name}`}
                        className="text-capitalize dropdown-item"
                        key={index}
                      >
                        {category.name}
                      </Link>
                    );
                  })}
              </NavDropdown>
              <NavLink to="Products" className="nav-link">
                Zapatillas
              </NavLink>
              <NavLink to="/shoes" className="nav-link">
                Administrar Productos
              </NavLink>
              <NavLink to="/orders" className="nav-link">
                Administrar Ordenes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

