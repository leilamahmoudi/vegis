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
                  <li className="home-list">HOME</li>
                  <li className="home-list">SHOP</li>
                  <li className="home-list">COLLECTION</li>
                  <li className="home-list">PAGES</li>
                  <li className="home-list">BLOGS</li>
                  <li className="home-list">BUY VIGIST</li>
                </ul>
              </div>
            </form>
            <i class="fas fa-headset"></i>
            <ul>
              <li>
                <a href="#">HOTLINES</a>
              </li>
              <li>+01 234 567 89</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
