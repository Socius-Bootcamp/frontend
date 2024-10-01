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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Realiza la solicitud de inicio de sesión
    store
      .dispatch(logUser({ email, password }))
      .unwrap()
      .then(() => {
        // Crea un array con todas las promesas de dispatch, para obtener y guardar los datos
        const promises = [
          store.dispatch(cartFetch()),
          store.dispatch(userOrdersFetch()),
          store.dispatch(productsFetch()),
          store.dispatch(categoriesFetch()),
        ];

        // Usa Promise.all para esperar a que todas se resuelvan
        Promise.all(promises)
          .then(() => {
            setIsLoading(false);
            navigate("/home");
          })
          .catch((error) => {
            console.log("Error en alguna de las peticiones, " + error.message);
          });
      })
      .catch((error) => {
        alert("Credenciales incorrectas");
        setIsLoading(false);
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
                      {isLoading ? "Loading..." : "Entrar"}
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
