import React, { Component } from "react";
import Products from "./Products";
import "../styles/Form.css";
import { Prompt } from "react-router-dom";
class Form extends Component {
  state = {
    text: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      text: "",
    });
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="contact">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <textarea
              onChange={this.handleChange.bind(this)}
              value={this.state.text}
              name="text"
              id="text"
              cols="30"
              rows="10">
              Napisz do nas..
            </textarea>
            <br />
            <button>Wyslij</button>
          </form>
          <Prompt
            when={this.state.text}
            message="Masz niewypełniony formularz"
          />
        </div>
      </>
    );
  }
}

export default Form;
