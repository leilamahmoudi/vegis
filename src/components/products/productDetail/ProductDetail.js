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
  const [qty, setQty] = useState(0);
  const loction = useLocation();
  const pathname = loction.pathname;
  const arr = pathname.split("/");
  const productId = arr[arr.length - 1];

  const [quantity, setQuantity] = useContext(DataContext);

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("productList"));
    const product = productList.filter((item) => item.id === Number(productId));
    const relatePr = [...productList];
    relatePr.splice(5, relatePr.length - 5);

    setRelatedProduct(relatePr);

    setCurrentProduct(product[0]);
  }, [productId]);
  const getQuntity = (value) => {
    setQty(value);
  };
  console.log("qty in peroduct detail", qty);

  const handelAddToCart = () => {
    const productBasket = {
      id: productId,
      qty,
    };
    setQuantity(qty);

    const cart = localStorage.getItem("cart");
    if (cart) {
      const localCart = JSON.parse(cart);
      const newArr = [...localCart];
      const index = newArr.findIndex((item) => item.id === productId);
      if (index > -1) {
      } else {
      }
      //continu
      console.log(localCart);
    } else {
      let arr = [];
      arr.push(productBasket);
      localStorage.setItem("cart", JSON.stringify(arr));
    }
  };

  return (
    <div className="Products-detail">
      <div className="container">
        <PageTemplate>
          <div className="products-bar">
            <Link className="link-product-deatail home" to="/">
              Home
            </Link>
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
                    Availability:{currentProduct && currentProduct.availability}
                    {/* <a href="/" className="link-product-deatail">
                      {currentProduct && currentProduct.availability}
                    </a> */}
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
                      7
                    </a>
                    products are left in stock!
                  </p>
                  <QuntityBox getQuntity={getQuntity} />
                  <button
                    className="add-cart-btn"
                    onClick={() => handelAddToCart()}
                  >
                    {" "}
                    ADD TO CART{" "}
                  </button>
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
