import React, { Component } from "react";

import "./App.css";
import UsersList from "./UsersList.js";
import ButtonFetchUsers from "./ButtonFetchUsers.js";
const API = "https://randomuser.me/api/?results=1";
class App extends Component {
  state = {
    people: [],
  };

  handleDataFetch() {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("błąd!!");
      })
      .then((response) => response.json())
      .then((data) => {
        const people = data.results;
        this.setState((preveState) => ({
          people: preveState.people.concat(people),
        }));
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch.bind(this)} />
        {people.length > 0 ? <UsersList people={people} /> : people}
      </div>
    );
  }
}

export default App;
