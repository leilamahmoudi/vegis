import React from "react";
import "./Head.css";

export default function Head() {
  return (
    <div className="Head">
      <div className="container">
        <div className="header">
          {/* <img className="header-logo" src="./images/download.png" alt="logo" /> */}
          <i class="fas fa-seedling header-logo"></i>
          <i class="fas fa-shopping-basket header-basket"></i>
        </div>

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
              <li>
                <ul>HOME</ul>
                <ul>SHOP</ul>
                <ul>COLLECTION</ul>
                <ul>PAGES</ul>
                <ul>BLOGS</ul>
                <ul>BUY VIGIST</ul>
              </li>
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
  );
}
