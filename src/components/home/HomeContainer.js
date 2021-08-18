import React from "react";
import "./homeContainer.css";
import { ReactComponent as BG } from "assets/images/bg/bg.svg";
import { ReactComponent as Headphones } from "assets/images/icons/headphones.svg";
const HomeContainer = () => {
  return (
    <div className="Home">
      <div className="">
        <div className="home-bar">
          <p className="home-home">HOME</p>
          <p className="home-create">Create Account</p>
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
