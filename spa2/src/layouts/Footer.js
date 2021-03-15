import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={() => (
          <p>
            Jestes na <span>stronie głównej</span>
          </p>
        )}
      />
      <Route
        path="/:page"
        exact
        render={(props) => (
          <p>
            Jestes na <span>{props.match.params.page}</span>
          </p>
        )}
      />
      <Route
        path="/product/:page"
        exact
        render={(props) => (
          <p>
            Jestes na <span>{props.match.params.page}</span>
          </p>
        )}
      />
    </div>
  );
};

export default Footer;
