import React, { useState } from "react";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";
import ExpandMenu from "components/footer/expandMenu/ExpandMenu";
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
          <div className="servises footer-item">
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
          </div>

          <div className="servises footer-item">
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
          </div>

          <div className="servises footer-item">
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
          </div>

          <div className="servises footer-item">
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
          </div>

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
