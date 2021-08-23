import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "components/header/Header";
import Home from "pages/Home";
import Login from "pages/Login";
import Product from "components/product/Product";
import Collection from "components/collection/Collection";
import Blogs from "components/blogs/Blogs";
import CreateAccount from "components/creat-account/CreateAccount";
import LoginForm from "components/login/LoginForm";
import Footer from "components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exat path="/collection">
              <Collection />
            </Route>
            <Route exat path="/blogs">
              <Blogs />
            </Route>
            <Route exat path="/creat-account">
              <CreateAccount />
            </Route>
          </Switch>
          <LoginForm />
          <Footer />
        </div>
      </Router>
      {/* <header className="App-header">
        <Header />
        <Home />
        <Footer />
      </header> */}
    </div>
  );
}

export default App;
