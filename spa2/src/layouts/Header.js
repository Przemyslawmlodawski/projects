import React, { Component } from "react";
import { Router } from "react-router";
import header1 from "../img/header1.jpg";
import header2 from "../img/header2.jpg";
import header3 from "../img/header3.jpg";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => <img src={header1} alt="city" />}
        />
        <Route
          path="/products"
          render={() => <img src={header2} alt="city" />}
        />
        <Route
          path="/contact"
          render={() => <img src={header3} alt="city" />}
        />
        <Route path="/admin" render={() => <img src={header3} alt="city" />} />
        <Route render={() => <img src={header1} alt="city" />} />
      </Switch>
    </>
  );
};

export default Header;
