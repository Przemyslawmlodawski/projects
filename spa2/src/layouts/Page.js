import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Start from "../pages/Start";
import Products from "../pages/Products";
import Form from "../pages/Form";
import ErrorPage from "../pages/ErrorPage";
import PanelAdmin from "../pages/PanelAdmin";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Start} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={Form} />
        <Route path="/admin" component={PanelAdmin} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
