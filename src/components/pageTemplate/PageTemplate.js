import React from "react";
import PropTypes from "prop-types";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

const PageTemplate = ({ children, className }) => {
  return (
    <div className={`PageTemplate ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
PageTemplate.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default PageTemplate;
