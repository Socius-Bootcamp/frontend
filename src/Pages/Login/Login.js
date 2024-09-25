import React, { Fragment, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import './Login.css'; 
import axios from 'axios'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de inicio de sesión
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      // Guarda el token en el almacenamiento local
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Redirige al home

    } catch (error) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <Fragment>
        <TopNavbar showFullMenu={false} />
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
                    <Button
                      type="submit"
                      className="w-100 mt-4"
                      style={{ backgroundColor: '#a21cff', border: 'none' }}
                    >
                      Entrar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    </div>
  );
};

export default Login;
