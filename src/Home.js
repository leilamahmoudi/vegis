import React from "react";
import "./Home.css";
import Create from "./Create";

export default function Home() {
  return (
    <div className="Home">
      <div className="home-bar">
        <p>HOME</p>
        <p>Create Account</p>
      </div>
      <div className="home-main">
        <img href="#" alt="vegist" />
      </div>
      <Create />
    </div>
  );
}
