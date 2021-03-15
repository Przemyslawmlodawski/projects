import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../styles/Navigation.css";
const list = [
  {
    name: "start",
    path: "/",
    exact: true,
    color: "red",
  },
  { name: "produkty", path: "/products", color: "green" },
  {
    name: "kontakt",
    path: "/contact",
    color: "blue",
  },
  {
    name: "Panel Admina",
    path: "/admin",
    color: "yellow",
  },
];
const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeStyle={{
          borderLeft: `10px ${item.color} solid`,
          transform: "translateX(0)",
        }}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
