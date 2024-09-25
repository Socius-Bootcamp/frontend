import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import TopNavbar from "../Components/Header/TopNavbar";

const NotFound = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <TopNavbar showFullMenu={true} />
=======
      <TopNavbar />
>>>>>>> 87ddb550eb80194417eae7759df5a1399e2be311
      <Container>
        <div className="m-auto w-100 text-center my-5">
          <h1 className="text-danger">(0o0) Page Not Found</h1>
          <Link to="/" className="text-dark text-decoration-none fs-5">
            Return to Home Page
          </Link>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default NotFound;
