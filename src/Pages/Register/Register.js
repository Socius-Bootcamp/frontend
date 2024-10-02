import React, { Fragment, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Navbar, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Register.css";
import Footer from "../../Components/Footer/Footer";
import { registerUser } from "../../Redux/User/UserSlice";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formData.password === formData.password2) {
      dispatch(registerUser(formData))
        .unwrap()
        .then(() => {
          alert("Registration successful");
          setIsLoading(false);
          setFormData({ firstName: "", lastName: "", phone: "", email: "", password: "", password2: "" });
        })
        .catch(() => {
          alert("Account with that email already exists");
          setIsLoading(false);
        });
    } else {
      alert("Both passwords aren't the same");
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            <Image
              src="../img/Nike.png"
              alt="Logo"
              style={{ height: "30px" }} // Ajusta la altura del logo según lo necesites
            />
          </Link>
        </Container>
      </Navbar>
      <Container fluid className="register-container">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Card className="bg-dark text-white">
              <Card.Body>
                <h2 className="mb-4">Register</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" id="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" id="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" id="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" id="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" id="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter password"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" id="formPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password2"
                          value={formData.password2}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-3"
                    disabled={isLoading}
                    style={{ backgroundColor: "#a21cff", border: "none" }}
                  >
                    {isLoading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        Registering...
                      </>
                    ) : (
                      "Register"
                    )}
                  </Button>
                </Form>
                <br />
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Already have an account? Go Log in!
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Register;
