import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const permission = true;
const PanelAdmin = () => {
  return (
    <>
      <Route
        render={() =>
          permission ? <h3>Panel Admina</h3> : <Redirect to="/login" />
        }
      />
    </>
  );
};

export default PanelAdmin;
