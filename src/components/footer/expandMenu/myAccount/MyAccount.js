import React, { useState } from "react";
import ExpandMenuMinus from "components/footer/expandMenu/ExpandMenuMinus";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";
import "./myAccount.scss";

const MyAccount = () => {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="myAccount footer-item">
      <p className="account-title">
        My Account
        {openExpand ? (
          <ExpandMenuMinus
            className="expand-minus-icon-account push-right"
            toggleExpand={toggleExpand}
          />
        ) : (
          <ExpandMenuPlus
            className="expand-plus-icon-account push-right"
            toggleExpand={toggleExpand}
          />
        )}
      </p>

      <div className={`account-items ${openExpand ? "show" : "hide"}`}>
        <p className="account">Account</p>
        <p className="myCart">My Cart</p>
        <p className="orderHistory">Order History</p>
        <p className="wishList">Wishlist</p>
      </div>
    </div>
  );
};
export default MyAccount;
