import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from './Card/ProductCard'
const product={"id":6,"name":"AIR JORDAN 3 RETRO","image":"AIR JORDAN 3 RETRO.jpg","price":179, "category":2};


const LatestProducts = () => {
  return (
    <Container>
      <h3 className="text-center mb-4">Latest Products</h3>
      <Row>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={product.id}>
            <ProductCard product={product} />
        </Col>
      </Row>
    </Container>
  )
}

export default LatestProducts