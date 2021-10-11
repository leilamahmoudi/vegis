import React, { useEffect, useState, useContext } from "react";
import ProductCard from "components/products/productCard/ProductCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./productDetail.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";
import QuntityBox from "components/quntityBox/QuntityBox";
import { DataContext } from "store/DataProvider";

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const loction = useLocation();
  const pathname = loction.pathname;
  const arr = pathname.split("/");
  const productId = arr[arr.length - 1];

  const [quantity] = useContext(DataContext);
  console.log(quantity);
  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("productList"));
    const product = productList.filter((item) => item.id === Number(productId));
    const relatePr = [...productList];
    relatePr.splice(5, relatePr.length - 5);

    setRelatedProduct(relatePr);

    setCurrentProduct(product[0]);
  }, [productId]);
  const getQuntity = (value) => {
    console.log("quantity", value);
  };

  return (
    <div className="Products-detail">
      <div className="container">
        <PageTemplate>
          <div className="products-bar">
            <Link className="link-product-deatail home" to="/">
              Home
            </Link>
            {/* <p className="product-detail-title">
              {" "}
              {currentProduct && currentProduct.title}
            </p> */}
          </div>
          <div className="product-row">
            <div className="product-column-img">
              <figure className="img-wrap">
                <img
                  className="img-product-detail"
                  src={currentProduct && currentProduct.imgUrl}
                  alt="Card cap"
                />
              </figure>
            </div>
            <div className="product-column-details">
              <div className="card-body">
                <div className="card-content">
                  <h5 className="card-title">
                    {currentProduct && currentProduct.title}
                  </h5>
                  <p>
                    Availability:
                    <a href="/" className="link-product-deatail">
                      {" "}
                      In Stock{" "}
                    </a>{" "}
                  </p>
                  <p className="card-text">
                    {currentProduct && currentProduct.text}
                  </p>
                  <small className="text-price">
                    {currentProduct && currentProduct.price}
                  </small>
                  <p>
                    Hurry up! Only{" "}
                    <a href="/" className="link-product-deatail">
                      {" "}
                      7{" "}
                    </a>{" "}
                    products are left in stock!
                  </p>
                  <QuntityBox getQuntity={getQuntity} />
                  <small className="text-rate">
                    {currentProduct && currentProduct.rate}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="product-description"></div>
          <div className="related-product">
            <div className="card-group">
              {relatedProduct ? (
                relatedProduct.map((item) => {
                  return <ProductCard item={item} key={item.id} />;
                })
              ) : (
                <div className="loading">loading</div>
              )}
            </div>
          </div>
        </PageTemplate>
      </div>
    </div>
  );
};
export default ProductDetail;
