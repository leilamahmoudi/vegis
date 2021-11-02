import React, { useContext } from "react";
import { DataContext } from "store/DataProvider";
import ShoppingCard from "./shoppingCard/ShoppingCard";
import "./cartContainer.scss";

const CartContainer = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [quantity] = useContext(DataContext);
  return (
    <div className="Cart">
      <div className="container">
        <div className="cart-bar">
          <p className="cart-home">Home</p>

          <div className="shopping-Cart">Your Shopping Cart</div>
        </div>
        <div className="cart-shopping-wraper">
          <div className="cart-list-item-bag-left">
            <div className="cart-my-cart">
              <p className="cart-title">My Cart:</p>
              <p className="cart-number">Items: {quantity}</p>
            </div>
            {cart && cart.items.length > 0 ? (
              <div className="cart-shop-bag-body">
                <div className="check-summary-total">
                  {cart.items.map((item) => {
                    return (
                      <ShoppingCard item={item} cart={cart} key={item.id} />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="cart-check-no-item">There is no item! </div>
            )}
          </div>
          <div className="cart-check-summary-right">
            <div className="check-summary-title">Order summary</div>

            <div className="check-btn">
              <button className="check-btn-check-out">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartContainer;
