import React, { Component, useImperativeHandle } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    prio: false,
    date: this.minDate,
  };
  handleChange(e) {
    const name = e.target.name;
    if (e.target.type == "text" || e.target.type == "date") {
      this.setState({
        [name]: e.target.value,
      });
    } else if (e.target.type == "checkbox") {
      this.setState({
        [name]: e.target.checked,
      });
    }
  }
  handleClick() {
    const add = this.props.addTask(
      this.state.text,
      this.state.prio,
      this.state.date
    );
    if (add) {
      this.setState({
        text: "",
        prio: false,
        date: this.minDate,
      });
    }
  }
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate += "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          name="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="checkbox"
          name="prio"
          id=""
          checked={this.state.prio}
          onChange={this.handleChange.bind(this)}
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobic: </label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
