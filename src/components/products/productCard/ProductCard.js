import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard">
      <div className="card">
        <figure className="img-wrap">
          <img className="card-img-top" src={item.imgUrl} alt="Card cap" />
        </figure>

        <div className="card-body">
          <div className="card-content">
            <h5 className="card-title">
              <Link to={`/product-detail/${item.id}`}>{item.title}</Link>
            </h5>
            <p className="card-text">{item.text}</p>
            <small className="text-price">{item.price}</small>
            <small className="text-rate">{item.rate}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
