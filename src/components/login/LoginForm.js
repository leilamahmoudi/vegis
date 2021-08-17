import React from "react";
import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="LoginForm">
      <div className="container">
        <div className="create-account">
          <div className="create-title">
            <h3>Create Account</h3>
            <p>Please register below account detail</p>
          </div>
          <div className="create-form">
            <form>
              <input type="text" value="First Name"></input>
              <input type="text" value="Last Name"></input>
              <input type="text" value="Email"></input>
              <input type="text" value="Password"></input>
              <button type="button">Create</button>
            </form>
          </div>
        </div>
        <div className="account-holder">
          <p>Alredy an account holder?</p>
          <button type="button">Log in</button>
          <p>* Terms & conditions</p>
          <p>
            Your privacy and security is important to us.For more <br />{" "}
            information on how we use your data read our
            <a href="#">privacy policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
