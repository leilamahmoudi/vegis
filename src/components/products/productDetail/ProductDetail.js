import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./productDetail.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const loction = useLocation();
  const pathname = loction.pathname;
  const arr = pathname.split("/");
  const productId = arr[arr.length - 1];
  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("productList"));
    const product = productList.filter((item) => item.id === Number(productId));

    setCurrentProduct(product[0]);
  }, [productId]);
  console.log(currentProduct);

  return (
    <div className="Products">
      <div className="container">
        <PageTemplate>
          <div className="products-bar">
            <h3> {currentProduct.title}</h3>
          </div>
        </PageTemplate>
      </div>
    </div>
  );
};
export default ProductDetail;
