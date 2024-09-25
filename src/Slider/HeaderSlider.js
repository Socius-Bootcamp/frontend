import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "fill" }}
            src="../img/slider/road-challenge.png"
            alt="nike road challenge"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "fill" }}
            src="../img/slider/work-dream.png"
            alt="stop dream start working"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HeaderSlider;
