import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({
          people: users,
        });
      }
    };
    xhr.send(null);
  }
  render() {
    const users = this.state.people.map((people) => (
      <p key={people.id}>
        {people.name} {people.username}
      </p>
    ));
    return <div className="App">{users}</div>;
  }
}

export default App;
