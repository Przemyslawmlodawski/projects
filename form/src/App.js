import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    message: "",
    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  };
  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło mus mieć 8 znaków ",
    accept_incorrect: "Zgoda musi zostać zaznaczona",
  };

  handleChange(e) {
    console.log(e.target.type);
    console.log(e.target.name);
    const checked = e.target.checked;
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text" || type === "password" || type === "email") {
      this.setState({
        [name]: e.target.value,
      });
    } else if (type === "checkbox") {
      this.setState({
        [name]: e.target.checked,
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: "Formularz został wysłany",
        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  }
  formValidation() {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.password.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true;
    }
    return {
      correct,
      username,
      password,
      email,
      accept,
    };
  }
  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(() => {
        this.setState({
          message: "",
        });
      }, 1000);
    }
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
            <span>
              {this.state.errors.username && (
                <span>{this.messages.username_incorrect}</span>
              )}
            </span>
          </label>
          <label htmlFor="email">
            Twój email:
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
            <span>
              {this.state.errors.email && (
                <span>{this.messages.email_incorrect}</span>
              )}
            </span>
          </label>
          <label htmlFor="password">
            Twoje hasło:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
            <span>
              {this.state.errors.password && (
                <span>{this.messages.password_incorrect}</span>
              )}
            </span>
          </label>
          <label htmlFor="accept">
            Wyrażam zgodę
            <input
              type="checkbox"
              name="accept"
              id="accept"
              checked={this.state.accept}
              onChange={this.handleChange.bind(this)}
            />
            <span>
              {this.state.errors.accept && (
                <span>{this.messages.accept_incorrect}</span>
              )}
            </span>
          </label>

          <button>Zapisz się</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
