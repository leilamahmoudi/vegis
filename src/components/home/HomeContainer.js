import React from "react";
import "./homeContainer.scss";
import { Link } from "react-router-dom";
const HomeContainer = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="home-bar">
          <p className="home-home">HOME</p>
          <div className="home-create">
            <Link className="link-create-account" to="/create-account">
              Create Account
            </Link>
          </div>
        </div>
        <div className="home-main">
          <div className="home-screen"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
