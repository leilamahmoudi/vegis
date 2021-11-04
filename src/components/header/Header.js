import React, { useState, useContext } from "react";
import { DataContext } from "store/DataProvider";
import { ReactComponent as HeaderLogo } from "assets/images/logo/logo.svg";
import { ReactComponent as HeaderBasket } from "assets/images/icons/basket.svg";
import { ReactComponent as Headphones } from "assets/images/icons/headphones.svg";
import { ReactComponent as HamburgerMenu } from "assets/images/icons/hamburger-menu.svg";
import MobileMenu from "components/mobileMenu/MobileMenu";
import VegidtDropDown from "components/vegistDropDown/VegistDropDown";
import { Link } from "react-router-dom";

import "./header.scss";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClose = () => {
    setOpenMenu(false);
  };
  const [quantity] = useContext(DataContext);
  const categoryItems = [
    { id: 1, name: "Fresh Fruits" },
    { id: 2, name: "Fresh Meat" },
    { id: 3, name: "Fresh Vegetable" },
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="header-bar">
          <HeaderLogo className="header-logo" />
          <HamburgerMenu
            className="mobile-menu"
            onClick={() => setOpenMenu(true)}
          />
          <Link className="link" to="/shopping-bag">
            <HeaderBasket className="header-basket" />
            <span className="qtn-basket">{quantity}</span>
          </Link>
          <MobileMenu open={openMenu} handleClose={handleClose} />
        </div>
        <nav className="nav-bar">
          <div className="nav-category">
            <VegidtDropDown
              className="isGreen "
              title="Browse Category"
              items={categoryItems}
            />

            {/* <select className="category">
              <option value="browser category" className="header-option">
                Browser Category
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="cheese">Cheese</option>
            </select> */}
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
                <Link className="link" to="/products">
                  Products
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
