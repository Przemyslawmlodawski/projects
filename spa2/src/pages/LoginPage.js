import React, { Component } from "react";
const LoginPage = () => {
  return (
    <>
      <div>
        <label htmlFor="">
          Podaj Login
          <input type="text" />
        </label>
        <br />
        <label htmlFor="">
          Podaj hasło
          <input type="password" />
        </label>
        <button>Zaloguj</button>
      </div>
    </>
  );
};

export default LoginPage;
