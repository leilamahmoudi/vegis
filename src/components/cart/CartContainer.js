import React from "react";
import QuntityBox from "components/quntityBox/QuntityBox";
import "./cartContainer.scss";

const CartContainer = () => {
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const cart = JSON.parse(localStorage.getItem("cart"));

  const getQuntity = (value) => {
    console.log(value);
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
              <p className="cart-number">Items: {cart.total}</p>
            </div>
            <div className="cart-shop-bag-body">
              <div className="check-summary-total">
                {cart.items.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="cart-shop-bag-item">
                        <figure className="cart-img-wrap">
                          <img
                            className="cart-img"
                            src={item.imgUrl}
                            alt="Cart-img-purchase"
                          />
                        </figure>
                        <div className="cart-shop-info">
                          <div className="cart-shop-info-title">
                            {item.title}
                          </div>
                          <div className="cart-shop-info-size">Size: 1kg</div>
                          <div className="cart-shop-info-per-price">
                            {item.price}
                          </div>
                        </div>
                        <div className="cart-shop-quntity">
                          <QuntityBox
                            getQuntity={getQuntity}
                            defaultValue={item.qty}
                          />
                        </div>
                        <div className="cart-shop-price">75.00kr</div>
                        <button
                          className="cart-remove"
                          onClick={() => handelRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
