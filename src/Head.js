import React from "react";

export default function Head() {
  return (
    <div className="Head">
      <div className="container">
        <img src="/" alt="logo" />
        <i class="fas fa-shopping-basket"></i>
        <nav>
          <form>
            <select>
              <option value="browser category">Browser category</option>
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="cheese">Cheese</option>
            </select>
          </form>
          <li>
            <ul>HOME</ul>
            <ul>SHOP</ul>
            <ul>COLLECTION</ul>
            <ul>PAGES</ul>
            <ul>BLOGS</ul>
            <ul>BUY VIGIST</ul>
          </li>
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
