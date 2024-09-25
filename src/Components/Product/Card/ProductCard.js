import React, { Fragment } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const categories = [
  { id: 1, name: "Urban" },
  { id: 2, name: "Basket" },
  { id: 3, name: "Skate" },
  { id: 4, name: "Running"},
  { id: 5, name: "Training"},
  { id: 6, name: "Futbol"}
];

const ProductCard = ({ product }) => {
  //const { categories } = useSelector((state) => state.categories);
  
  return (
    <Fragment>
      <Link
        to={`/Product/${product.id}`}
        className="text-dark text-decoration-none"
      >
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="py-3 card-img"
            src={`../img/products/${product.image}`}
          />
          <Card.Body className="text-center">
            <Card.Title className="fs-6">
              {product.name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Stock: {product.stock}</Card.Subtitle>
            <Card.Text className="text-capitalize text-decoration-nose fs-6">
              {
                (categories.find((element) => element.id === product.CategoryId)).name
              }
            </Card.Text>
            <h5>${product.price}</h5>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
