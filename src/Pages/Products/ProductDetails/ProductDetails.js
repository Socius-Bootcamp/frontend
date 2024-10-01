import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../Components/Header/TopNavbar";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../../../Components/Footer/Footer";
import "./ProductDetails.css";
import { addItem } from "../../../Redux/Cart/CartSlice";

const ProductDetails = () => {
  const { categories } = useSelector((state) => state.categories);
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  let [category, setCategory] = useState(null);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //increase item quantity, but not above the available stock value
  const increaseQty = (e) => {
    e.preventDefault();
    quantity < product.stock ? setQuantity((quantity += 1)) : setQuantity(quantity);
  };

  //decrease item quantity, but not less than 1
  const decreaseQty = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

  //use effect function to find the product from all products and get the category name
  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(id));
    if (result) {
      setProduct(result);
      let category = categories.find((element) => element.id === result.CategoryId).name;
      setCategory(category);
    }
  }, [id, products, categories]);

  //create the item object to just save the necessary data
  const handleAddToCart = (e) => {
    e.preventDefault();
    let cartItem = {
      ProductId: parseInt(product.id),
      price: product.price,
      qty: quantity,
    };
    let data = {
      cartItem,
      mode: "normal",
    };
    dispatch(addItem(data));
  };

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        {product ? (
          <Row className="my-5">
            <Col md={6} sm={12}>
              <div className="img-container p-3">
                <Image className="single-img" src={`../img/products/${product.image}`} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{product.name}</h2>
                <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link to={`/Category/${category}`} className="text-capitalize text-decoration-none">
                    {category}
                  </Link>
                </h4>
                <h4 className="py-2">Price: ${product.price}</h4>
                <p>Available Stock: {product.stock}</p>

                {product.stock < 1 ? (
                  <h3>Out of stock</h3>
                ) : (
                  <>
                    <div className="d-flex mb-3">
                      <Button className="btn btn-sm btn-dark fs-6 me-3 text-center" onClick={decreaseQty}>
                        -
                      </Button>
                      <input
                        type="number"
                        className="form-control text-center w-auto p-0 m-0"
                        value={quantity}
                        readOnly={true}
                        required={true}
                      />
                      <Button className="btn btn-sm btn-dark fs-6 ms-3 text-center" onClick={increaseQty}>
                        +
                      </Button>
                    </div>
                    <div className="">
                      <Button variant="dark" className="me-2" onClick={handleAddToCart}>
                        Add To Cart
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        ) : (
          <div className="m-auto w-100 text-center my-5">
            <h1 className="text-danger">(0o0) Product Not Found</h1>
            <Link to="/Home" className="text-dark text-decoration-none fs-5">
              Return to Home Page
            </Link>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
