import React from "react";
import LoginContainer from "components/login/LoginContainer";
import PageTemplate from "components/pageTemplate/PageTemplate";
import "./login.scss";

const Login = () => {
  return (
    <PageTemplate className="login-page">
      <LoginContainer />
    </PageTemplate>
  );
};
export default Login;
