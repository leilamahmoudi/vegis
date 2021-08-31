import React from "react";
import LoginContainer from "components/login/LoginContainer";
import PageTemplate from "components/pageTemplate/PageTemplate";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <PageTemplate className="login-page">
        <LoginContainer />;
      </PageTemplate>
    </div>
  );
};
export default Login;
