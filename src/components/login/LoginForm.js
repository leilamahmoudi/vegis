import React from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="LoginForm">
      <div className="create-account">
        <div className="create-title">
          <h3 className="logi-title">Login</h3>
        </div>
        <div className="create-form">
          <form>
            <input type="text" value="Email" className="login-email"></input>
            <input type="text" value="Password" className="login-pass"></input>
          </form>
        </div>
      </div>
      <div className="account-holder">
        <button type="button" className="login-btn">
          Login
        </button>
      </div>
      <div className="privacy-policy">
        <Link className="link" to="/privacy">
          Privacy and policy
        </Link>
      </div>
    </div>
  );
}
