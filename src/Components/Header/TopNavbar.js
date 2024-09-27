import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
//import logo from '../../../public/img/Nike.png';

const categories = [
  { id: 1, name: "Urban" },
  { id: 2, name: "Basket" },
  { id: 3, name: "Skate" },
  { id: 4, name: "Running"},
  { id: 5, name: "Training"},
  { id: 6, name: "Futbol"}
];


const TopNavbar = ({ hideFullMenu }) => {
  let user=null;
  if(localStorage.getItem("token")){
    user=JSON.parse(localStorage.getItem("token"));
  }
  //const { categories } = useSelector((state) => state.categories);
  const cart= useSelector((state) => state.cart);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Image
            src="../img/Nike.png" 
            alt="Logo"
            style={{ height: '30px' }} // Ajusta la altura del logo según lo necesites
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {!hideFullMenu  && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/Home" className="nav-link">
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
            { user.admin &&  (
              <NavDropdown title="Administration" id="basic-nav-dropdown">
                <Link to="/shoes" className="text-capitalize dropdown-item">
                Administrar Productos
                </Link>
                <Link to="/orders" className="text-capitalize dropdown-item">
                  Administrar Ordenes
                </Link>
              </NavDropdown>       
            )}
            
            <NavLink to="/Cart" className="nav-link">
                Cart ({cart.CartItems.length})
            </NavLink>
            <NavLink to="/Profile" className="nav-link">
                User
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        )};
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
