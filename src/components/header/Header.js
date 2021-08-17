import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="header">
          <img
            className="header-logo"
            src="assets/images/logo/logo.svg"
            alt="logo"
          />
          <img
            className="header-basket"
            src="assets/images/icons/basket.png"
            alt="basket"
          />

          <nav>
            <form className="nav-header">
              <div className="nav-category">
                <select>
                  <option value="browser category">Browser category</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="dinner">Dinner</option>
                  <option value="lunch">Lunch</option>
                  <option value="cheese">Cheese</option>
                </select>
              </div>
              <div className="header-home-item">
                <ul className="home-item">
                  <li className="home-list home">HOME</li>
                  <li className="home-list shop">SHOP</li>
                  <li className="home-list collection">COLLECTION</li>
                  <li className="home-list pages">PAGES</li>
                  <li className="home-list blogs">BLOGS</li>
                  <li className="home-list buy">BUY VIGIST</li>
                </ul>
              </div>

              <div className="hotlines-servise">
                <img
                  href="assets/images/icons/Headphones.png"
                  className="headphones"
                  alt="lines"
                />
                <ul className="hotlines">
                  <li>
                    <a href="#">HOTLINES</a>
                  </li>
                  <li>+01 234 567 89</li>
                </ul>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}
