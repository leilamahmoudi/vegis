import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "store/DataProvider";
import "./assets/styles/main.scss";
import Home from "pages/Home";
import Login from "pages/Login";
import Cart from "pages/Cart";
import Products from "components/products/Products";
import Collection from "components/collection/Collection";
import Blogs from "components/blogs/Blogs";
import CreateAccount from "components/creat-account/CreateAccount";
import Privacy from "components/privacy/Privacy";
import ProductDetail from "components/products/productDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/products">
              <Products />
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
            <Route path="/product-detail/:id">
              <ProductDetail />
            </Route>
            <Route path="/shopping-bag">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
