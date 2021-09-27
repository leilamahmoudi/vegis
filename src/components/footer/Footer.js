import React from "react";
import ExpandMenuItem from "./expandMenu/ExpandMenuItem";
import { ReactComponent as FooterLogo } from "assets/images/logo/logo.svg";
import "./footer.scss";

const footerItems = [
  {
    id: 1,
    title: "Servises",
    links: [
      { title: "About Vegist", url: "/About-Vegist" },
      { title: "Faq's", url: "/Faq's" },
      { title: "Contact Us", url: "/ContactUs" },
      { title: "Contact Us", url: "/ContactUs" },
      { title: "News", url: "/News" },
      { title: "Sitemap", url: "/Sitemap" },
    ],
  },
  {
    id: 2,
    title: "Privacy & policy",
    links: [
      { title: "Payment Policy", url: "/Payment-Policy" },
      { title: "Return Policy", url: "/Return-Policy" },
      { title: "Shipping Policy", url: "/Shipping-Policy" },
      { title: "Terms & Conditions", url: "/Terms-Conditions" },
    ],
  },
  {
    id: 3,
    title: "My Account",
    links: [
      { title: "Account", url: "/Account" },
      { title: "My Cart", url: "/My-Cart" },
      { title: "Order History", url: "/Order-History" },
      { title: "Wishlist", url: "/Wishlist" },
    ],
  },
  {
    id: 4,
    title: "Menu Title",
    links: [
      { title: "Fruits", url: "/Fruits" },
      { title: "Fast Foods ", url: "Fast-Foods" },
      { title: "Vegetable", url: "/Vegetable" },
      { title: "Salads", url: "/Wishlist" },
      { title: "Bestseller", url: "/Bestseller" },
    ],
  },
];

export default function Footer() {
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

          {footerItems.map((item) => {
            return <ExpandMenuItem item={item} key={item.id} />;
          })}

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
