import React from "react";
import { Formik } from "formik";
import "./loginForm.scss";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <div className="container">
        <div className="create-account">
          <div className="create-title">
            <h3 className="logi-title">Login</h3>
          </div>
          <div className="create-form">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    className="login-email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    className="login-pass"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}

                  <div className="account-holder">
                    <button
                      type="submit"
                      className="login-btn"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="privacy-policy">
          <Link className="link" to="/privacy">
            Privacy and policy
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
