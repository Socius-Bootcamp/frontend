import React, { Fragment, useEffect, useState } from "react";
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/Card/ProductCard";
import { useSelector } from "react-redux";

const SpecificCategory = () => {
  const [search, setSearch] = useState("");
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  let { SpecificCategory } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    let categoryId = categories.find((element) => element.name === SpecificCategory).id;
    let data = products.filter((p) => p.CategoryId === categoryId);
    setCategoryProducts(data);
  }, [SpecificCategory, categories, products]);
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="my-4">
          <h4 className="mb-4">
            All shoes from - <span className="text-capitalize">{SpecificCategory}</span>
          </h4>
        </div>
        <Form>
          <InputGroup className="my-3">
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search by product name" />
          </InputGroup>
        </Form>
        <Row>
          {categoryProducts &&
            categoryProducts
              .filter((item) => {
                return search.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(search);
              })
              .map((product) => {
                return (
                  <Col xs={12} sm={6} md={2} lg={2} className="mb-4" key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                );
              })}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default SpecificCategory;
