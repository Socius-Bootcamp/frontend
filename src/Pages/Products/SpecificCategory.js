import React, { Fragment, useEffect, useState } from "react";
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/Card/ProductCard";
const categories = [
  { id: 1, name: "Urban" },
  { id: 2, name: "Basket" },
  { id: 3, name: "Skate" },
];
const products = [
{
  id: 5,
  name: "NIKE AIR MAX 90",
  image: "NIKE-AIR-MAX-90.png",
  price: 160,
  stock: 10,
  category: 1,
},
{
  id: 6,
  name: "AIR JORDAN 3 RETRO",
  image: "AIR JORDAN 3 RETRO.jpg",
  price: 179,
  stock: 3,
  category: 2,
}];

const SpecificCategory = () => {
  let { SpecificCategory } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  let categoryId = categories.find(
    (element) => element.name === SpecificCategory
  ).id;
  useEffect(() => {
    let data = products.filter((p) => p.category === categoryId);
    setCategoryProducts(data);
  }, [SpecificCategory, categoryId]);
  return (
    <Fragment>
      <TopNavbar showFullMenu={true} />
      <Container>
        <div className="my-4">
          <h4 className="mb-4">
            All shoes from -{" "}
            <span className="text-capitalize">{SpecificCategory}</span>
          </h4>
        </div>
        <Row>
          {categoryProducts &&
            categoryProducts.map((product) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={2}
                  lg={2}
                  className="mb-4"
                  key={product.id}
                >
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
