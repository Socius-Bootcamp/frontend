import React, { Fragment } from "react";
import TopNavbar from "../Components/Header/TopNavbar";
import Footer from "../Components/Footer/Footer";
import HeaderSlider from "../Slider/HeaderSlider";
import AllCategories from "../Components/Categories/AllCategories";
import LatestProducts from "../Components/Product/LatestProducts";

const Home = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <TopNavbar showFullMenu={true} />
=======
      <TopNavbar />
>>>>>>> 87ddb550eb80194417eae7759df5a1399e2be311
      <HeaderSlider />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </Fragment>
  );
};

export default Home;
