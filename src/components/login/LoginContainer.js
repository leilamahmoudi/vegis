import React from "react";
import LoginForm from "./LoginForm";
import "./loginContainer.scss";

const LoginContainer = () => {
  return (
    <div className="LoginContainer">
      <div className="login-bar"></div>
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginContainer;
