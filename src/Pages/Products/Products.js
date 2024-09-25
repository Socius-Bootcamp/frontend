import React, { Fragment } from "react";
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/Product/Card/ProductCard";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <Fragment>
      <TopNavbar />
        <Container style={{"marginBottom": "3rem"}}>
          <h4 className="mb-4">Showing All Products</h4>
          <Row>
            {products && products?.map((p) => {
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
