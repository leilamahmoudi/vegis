import React from "react";
import "./homeContainer.css";
import { ReactComponent as BG } from "assets/images/bg/bg.svg";
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
          <div className="home-screen">
            <BG className="home-background" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
