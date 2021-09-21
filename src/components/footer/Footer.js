import React from "react";
import Servises from "components/footer/expandMenu/servises/Servises";
import Privacy from "components/footer/expandMenu/privacy/Privacy";
import MyAccount from "./expandMenu/myAccount/MyAccount";
import { ReactComponent as FooterLogo } from "assets/images/logo/logo.svg";
import "./footer.scss";

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
          <Servises />
          <Privacy />
          <MyAccount />
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
