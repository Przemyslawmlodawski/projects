import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const ProducPage = ({ match }) => {
  return (
    <>
      <div>Strona Produktu</div>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProducPage;
