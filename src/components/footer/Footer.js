import React from "react";
import "./footer.scss";
import { ReactComponent as FooterLogo } from "assets/images/logo/logo.svg";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-information">
          <div class="about-us">
            <FooterLogo className="footer-logo" />
            <p>
              Whether you’re looking for annual or interim reports, you can{" "}
              <br />
              download our financial publications here.
            </p>
          </div>
          <div className="servises">
            <ul className="servises">
              <li className="servis">Servises</li>
              <li className="about-vegist">About Vegist</li>
              <li className="faq's">Faq's</li>
              <li className="contact-us">Contact Us</li>
              <li className="news">News</li>
              <li className="sitemap">Sitemap</li>
            </ul>
          </div>

          <div className="privacy">
            <ul className="privacy">
              <li className="terms">Privacy & Terms</li>
              <li className="payment">Payment Policy</li>
              <li className="return">Return Policy</li>
              <li className="shipping">Shipping Policy</li>
              <li className="news">News</li>
              <li className="conditions">Terms & Conditions</li>
            </ul>
          </div>

          <div className="my-account">
            <ul className="my-account">
              <li className="myAccount">My Account</li>
              <li className="account">Account</li>
              <li className="cart">My Cart</li>
              <li className="history">Older History</li>
              <li className="wishlist">Wishlist</li>
            </ul>
          </div>

          <div className="menu">
            <ul className="menu">
              <li className="title">Menu </li>
              <li className="fruits">Fruits</li>
              <li className="fast">Fast Foods</li>
              <li className="vegetable">Vegtable</li>
              <li className="salads">Salads</li>
              <li className="bestsller">Bestseller</li>
            </ul>
          </div>

          <div className="get-deals">
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
