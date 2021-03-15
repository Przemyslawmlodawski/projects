import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
const products = [
  {
    id: 0,
    name: "Radio",
  },
  {
    id: 1,
    name: "Rower",
  },
  {
    id: 2,
    name: "Piłka",
  },
  {
    id: 3,
    name: "Komputer",
  },
];
const Products = () => {
  const product = products.map((item) => (
    <li key={item.id}>
      <Link to={`/product/${item.name}`}>{item.name}</Link>
    </li>
  ));
  return (
    <>
      <div className="products">
        <h3>Lista Produktów</h3>
        <ul>{product}</ul>
      </div>
    </>
  );
};

export default Products;
