import React, { Fragment, useState } from "react";
import { Form, Button, Container, Row, Col, Card, Navbar, NavLink, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./Login.css";
import store from "../../Redux/Store";
import { cartFetch } from "../../Redux/Cart/CartSlice";
import { userOrdersFetch } from "../../Redux/Order/OrderSlice";
import { productsFetch } from "../../Redux/Product/ProductSlice";
import { categoriesFetch } from "../../Redux/Category/CategorySlice";
import { logUser } from "../../Redux/User/UserSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // Realiza la solicitud de inicio de sesión
    store
      .dispatch(logUser({ email, password }))
      .unwrap()
      .then(() => {
        store.dispatch(cartFetch()).catch((error) => {
          console.log("No connection to cart on DB, " + error.message);
        });
        store.dispatch(userOrdersFetch()).catch((error) => {
          console.log("No connection to cart on DB, " + error.message);
        });
        //Se va a obtener los productos y las categorias
        store.dispatch(productsFetch()).catch((error) => {
          console.log("No connection to products on DB, " + error.message);
        });
        store.dispatch(categoriesFetch()).catch((error) => {
          console.log("No connection to categories on DB, " + error.message);
        });
        navigate("/home");
      })
      .catch((error) => {
        alert("Credenciales incorrectas");
      });
  };

  return (
    <Fragment>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <Image
              src="../img/Nike.png"
              alt="Logo"
              style={{ height: "30px" }} // Ajusta la altura del logo según lo necesites
            />
          </NavLink>
        </Container>
      </Navbar>
      <div className="login-container">
        <Container fluid>
          <Row className="w-100">
            <Col xs={10} sm={8} md={6} lg={4} className="left-align">
              <Card className="p-4 shadow-lg login-card">
                <Card.Body>
                  <h3 className="text-center mb-4">Bienvenidos de nuevo!</h3>
                  <p className="text-center mb-4">A continuación, ingresa tus datos.</p>
                  <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Escribe tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mt-3">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Escribe tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 mt-4" style={{ backgroundColor: "#a21cff", border: "none" }}>
                      Entrar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Login;
