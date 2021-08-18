import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "components/header/Header";
import Home from "pages/Home";
import Login from "pages/Login";

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
          </Switch>
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
