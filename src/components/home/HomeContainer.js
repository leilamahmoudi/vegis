import React from "react";
import "./homeContainer.css";
const HomeContainer = () => {
  return (
    <div className="Home">
      <div className="">
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
};
export default HomeContainer;
