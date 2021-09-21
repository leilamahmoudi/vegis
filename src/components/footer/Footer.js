import React, { useState } from "react";
import Servises from "components/footer/expandMenu/Servises";
import Privacy from "components/footer/expandMenu/Privacy";
import { ReactComponent as FooterLogo } from "assets/images/logo/logo.svg";
import "./footer.scss";
import ExpandMenuMinus from "./expandMenu/ExpandMenuMinus";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";

export default function Footer() {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-information">
          <div className="about-us footer-item">
            <FooterLogo className="footer-logo" />
            <p>
              Whether you’re looking for annual or interim reports, you can{" "}
              <br />
              download our financial publications here.
            </p>
          </div>

          <Servises />
          <Privacy />
          {/* 

          <div className="myAccount footer-item">
            <p className="account-title">
              My Account
              {openExpand ? (
                <ExpandMenuMinus
                  className="expand-minus-icon push-right"
                  toggleExpand={toggleExpand}
                />
              ) : (
                <ExpandMenuPlus
                  className="expand-plus-icon push-right"
                  toggleExpand={toggleExpand}
                />
              )}
            </p>

            <div className={`servises-items ${openExpand ? "show" : "hide"}`}>
              <p className="account">Account</p>
              <p className="myCart">My Cart</p>
              <p className="orderHistory">Order History</p>
              <p className="wishList">Wishlist</p>
            </div>
          </div>

          <div className="menu footer-item">
            <p className="menu-title">
              Menu Title
              {openExpand ? (
                <ExpandMenuMinus
                  className="expand-minus-icon push-right"
                  toggleExpand={toggleExpand}
                />
              ) : (
                <ExpandMenuPlus
                  className="expand-plus-icon push-right"
                  toggleExpand={toggleExpand}
                />
              )}
            </p>

            <div className={`servises-items ${openExpand ? "show" : "hide"}`}>
              <p className="fruits">Fruits</p>
              <p className="fastFood">Fast Foods</p>
              <p className="vegtable">Vegetable</p>
              <p className="salads">Salads</p>
              <p className="bestSeller">Bestseller</p>
            </div>
          </div> */}

          <div className="get-deals footer-item">
            <p>Get The Latest Deals</p>
            <p>And Recevie $20 Coupon For First Shopping </p>
          </div>
        </div>
        <div className="foot-bar">
          <div className="copy-right">
            <p className="copy-right">
              Copyright 2021 spacingtech rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
