import React, { useState } from "react";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";
import Servises from "components/footer/expandMenu/Servises";
import { ReactComponent as FooterLogo } from "assets/images/logo/logo.svg";
import "./footer.scss";
import ExpandMenuMinus from "./expandMenu/ExpandMenuMinus";

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
          {/* <div className="servises footer-item">
            <p className="servises-title">
              Servises
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
              <p className="about-vegist">About Vegist</p>
              <p className="faq's">Faq's</p>
              <p className="contact-us">Contact Us</p>
              <p className="news">News</p>
              <p className="sitemap">Sitemap</p>
            </div>
          </div> */}
          <Servises />

          {/* <div className="privacy footer-item">
            <p className="privacy-title">
              Privacy & policy
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
              <p className="payment">Payment Policy</p>
              <p className="return">Return Policy</p>
              <p className="shipping-policy">Shipping Policy</p>
              <p className="terms">Terms & Conditions</p>
            </div>
          </div>

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
