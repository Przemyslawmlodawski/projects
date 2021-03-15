import React, { Component } from "react";
import "./App.css";
import Text from "./Text.js";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    underline: false,
  };
  // handleClick() {
  //   this.setState({
  //     active: !this.state.active,
  //   });
  // }
  render() {
    const classes = ["one"];
    const text = "witaj na stronie";
    if (this.state.underline) classes.push("line");
    if (text.length > 10) classes.push("big");
    // let classes = "";
    // if (this.state.underline) classes += " line";

    // if (text.length > 10) classes += " big";
    // const btn_off = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "white",
    // };
    // const btn_on = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "cadetblue",
    //   color: "white",
    // };
    // const styles = {
    //   btn_off: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "white",
    //   },
    //   btn_on: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "cadetblue",
    //     color: "white",
    //   },
    // };
    // let btn = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    // };
    // if (this.state.active) {
    //   btn.backgroundColor = "cadetblue";
    //   btn.color = "white";
    // }
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">
            Carousel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"></input>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default App;
