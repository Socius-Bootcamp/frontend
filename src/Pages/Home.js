import React, { Fragment } from 'react'
import TopNavbar from "../Components/Header/TopNavbar";
import Footer from '../Components/Footer/Footer';
import HeaderSlider from '../Slider/HeaderSlider';
import AllCategories from '../Components/Categories/AllCategories';
import LatestProducts from '../Components/Product/LatestProducts';

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories/>
      <LatestProducts/>
      <Footer />
    </Fragment>
  )
}

export default Home