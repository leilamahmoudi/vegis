import React, { useState } from "react";
import { ReactComponent as HeaderLogo } from "assets/images/logo/logo.svg";
import { ReactComponent as HeaderBasket } from "assets/images/icons/basket.svg";
import { ReactComponent as Headphones } from "assets/images/icons/headphones.svg";
import { ReactComponent as HamburgerMenu } from "assets/images/icons/hamburger-menu.svg";
import MobileMenu from "components/mobileMenu/MobileMenu";
import { Link } from "react-router-dom";

import "./header.scss";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="header-bar">
          <HeaderLogo className="header-logo" />
          <HamburgerMenu
            className="mobile-menu"
            onClick={() => setOpenMenu(true)}
          />
          <HeaderBasket className="header-basket" />
          <MobileMenu open={openMenu} handleClose={handleClose} />
        </div>
        <nav className="nav-bar">
          <div className="nav-category">
            <select className="category">
              <option value="browser category">Browser Category</option>
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
                  Collection
                </Link>
              </li>

              <li className="home-list blogs">
                <Link className="link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="hotlines-servise">
            <Headphones className="headphones" />

            <ul className="hotlines">
              <li>
                <a className="link" href="/">
                  Hot Lines
                </a>
              </li>
              <li>+01 234 567 89</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
