import React from "react";
import PropTypes from "prop-types";
import "./shoppingCard.scss";
import QuntityBox from "components/quntityBox/QuntityBox";
// import { Link } from "react-router-dom";
const ShoppingCard = ({ item, cart }) => {
  const getQuntity = (qty) => {
    console.log(qty);
  };
  const handelRemove = (id) => {
    const localCart = [...cart.items];
    const index = localCart.findIndex(
      (element) => Number(element.id) === Number(id)
    );
    localCart.splice(index, 1);
    console.log(`index`, index, `localCart`, localCart);
    cart.items = localCart;
    const total = localCart.reduce((acc, element) => {
      return (acc = acc + element.qty);
    }, 0);
    cart.total = total;
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload(false);
  };
  return (
    <div className="ShoppingCard">
      <div className="cart-shop-bag-item">
        <figure className="cart-img-wrap">
          <img className="cart-img" src={item.imgUrl} alt="Cart-img-purchase" />
        </figure>
        <div className="cart-shop-info">
          <div className="cart-shop-info-title">{item.title}</div>
          <div className="cart-shop-info-size">Size: 1kg</div>
          <div className="cart-shop-info-per-price">{item.price}</div>
        </div>
        <div className="cart-shop-quntity">
          <QuntityBox getQuntity={getQuntity} defaultValue={item.qty} />
        </div>
        <div className="cart-shop-price">75.00kr</div>
        <button className="cart-remove" onClick={() => handelRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
ShoppingCard.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
};
export default ShoppingCard;
