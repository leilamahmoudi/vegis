import React from "react";
import "./productDetail.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";

const ProductDetail = () => {
  return (
    <div className="Products">
      <div className="container">
        <PageTemplate>
          <div className="products-bar">Product Detail</div>
        </PageTemplate>
      </div>
    </div>
  );
};
export default ProductDetail;
