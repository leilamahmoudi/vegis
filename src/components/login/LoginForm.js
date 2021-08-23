import React from "react";
import "./loginForm.css";

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
          Log in
        </button>
      </div>
    </div>
  );
}
