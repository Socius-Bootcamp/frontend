import React, { Fragment } from 'react'
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from '../../Components/Footer/Footer';
import LatestProducts from '../../Components/Product/LatestProducts';

const Products = () => {
  return (
    <Fragment>
      <TopNavbar />
        <LatestProducts/>
      <Footer />
    </Fragment>
  )
}

export default Products