import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../Redux/User/UserSlice";

const TopNavbar = () => {
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const cart = useSelector((state) => state.cart);
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to="/home" className="navbar-brand">
          <Image
            src="../img/Nike.png"
            alt="Logo"
            style={{ height: "30px" }} // Ajusta la altura del logo según lo necesites
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {user && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <Link to={`/Category/${category.name}`} className="text-capitalize dropdown-item" key={index}>
                        {category.name}
                      </Link>
                    );
                  })}
              </NavDropdown>
              <NavLink to="/Products" className="nav-link">
                Shoes
              </NavLink>
              {user.admin && (
                <NavDropdown title="Administration" id="basic-nav-dropdown">
                  <Link to="/shoes" className="text-capitalize dropdown-item">
                    Manage Products
                  </Link>
                  <Link to="/orders" className="text-capitalize dropdown-item">
                    Manage Orders
                  </Link>
                  <Link to="/" onClick={handleLogout} className="text-capitalize dropdown-item">
                    Log Out
                  </Link>
                </NavDropdown>
              )}
              {!user.admin && (
                <>
                  <NavLink to="/Cart" className="nav-link">
                    Cart ({cart.CartItems.length})
                  </NavLink>
                  <NavDropdown title="User" id="basic-nav-dropdown">
                    <Link to="/Profile" className="text-capitalize dropdown-item">
                      Profile
                    </Link>
                    <Link to="/" onClick={handleLogout} className="text-capitalize dropdown-item">
                      Log Out
                    </Link>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        )}
        ;
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
