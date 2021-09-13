import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import Home from "pages/Home";
import Login from "pages/Login";
import Product from "components/product/Product";
import Collection from "components/collection/Collection";
import Blogs from "components/blogs/Blogs";
import CreateAccount from "components/creat-account/CreateAccount";
import Privacy from "components/privacy/Privacy";
import HamburgerMenu from "components/hamburgerMenu/HamburgerMenu";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route exat path="/privacy">
            <Privacy />
          </Route>
          <Route exat path="/hamburgerMenu">
            <HamburgerMenu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
