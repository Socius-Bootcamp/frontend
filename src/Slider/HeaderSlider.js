import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }} 
            src="../img/slider/Nikespace.jpg"
            alt="Nike Space"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }} 
            src="../img/slider/work-dream.png"
            alt="stop dream start working"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }} 
            src="../img/slider/NIKEVIDEOFRAME.gif"
            alt="Nike Gif"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HeaderSlider;
