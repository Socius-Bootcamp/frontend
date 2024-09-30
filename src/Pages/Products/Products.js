import React, { Fragment, useState } from "react";
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ProductCard from "../../Components/Product/Card/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <TopNavbar />
      <Container style={{ marginBottom: "3rem" }}>
        <h4 className="mb-4">Showing All Products</h4>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by product name"
            />
          </InputGroup>
        </Form>
        <Row>
          {products &&
            products
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLocaleLowerCase().includes(search);
              })
              .map((p) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                    <ProductCard product={p} />
                  </Col>
                );
              })}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Products;
