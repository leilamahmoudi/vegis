import React from "react";
import { ReactComponent as HeaderLogo } from "assets/images/logo/logo.svg";
import { ReactComponent as HeaderBasket } from "assets/images/icons/basket.svg";
import { ReactComponent as Headphones } from "assets/images/icons/headphones.svg";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="header">
          <div className="header-bar">
            <HeaderLogo className="header-logo" />
            <HeaderBasket className="header-basket" />
          </div>
          <nav>
            <div className="nav-category">
              <select className="category">
                <option value="browser category">Browser category</option>
                <option value="breakfast">Breakfast</option>
                <option value="dinner">Dinner</option>
                <option value="lunch">Lunch</option>
                <option value="cheese">Cheese</option>
              </select>
            </div>
            <div className="header-home-item">
              <ul className="home-item">
                <li className="home-list home">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li className="home-list login">
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="home-list product">
                  <Link className="link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="home-list collection">
                  <Link className="link" to="/collection">
                    COLLECTION
                  </Link>
                </li>
                <li className="home-list pages">PAGES</li>
                <li className="home-list blogs">BLOGS</li>
                <li className="home-list buy">BUY VIGIST</li>
              </ul>
            </div>

            <div className="hotlines-servise">
              <Headphones className="headphones" />

              <ul className="hotlines">
                <li>
                  <a href="#">HOTLINES</a>
                </li>
                <li>+01 234 567 89</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
