import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="home-bar">
          <p className="home-home">HOME</p>
          <p className="home-create">Create Account</p>
        </div>
        <div className="home-main">
          <div className="home-screen"></div>
        </div>
      </div>
    </div>
  );
}
