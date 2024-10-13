/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>Challenge Final.</p>
          <p>&copy; {new Date().getFullYear()} SOCIUS Bootcamp. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-white mx-2">
              Terms & Conditions
            </a>
            |
            <a href="#" className="text-white mx-2">
              Privacy Policy
            </a>
            |
            <a href="mailto:info@sociusbootcamp.com" className="text-white mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
