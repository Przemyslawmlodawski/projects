import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: "Iść do fryzjera",
        date: "2018-02-15",
        important: true,
        active: true,
        endDate: "",
      },
      {
        id: 1,
        text: "Umyć samochód",
        date: "2018-02-15",
        important: false,
        active: true,
        endDate: "",
      },
    ],
  };
  deleteTask(id) {
    const task = [...this.state.tasks];
    console.log(task);
    const index = task.findIndex((item) => item.id === id);
    task.splice(index, 1);
    this.setState({
      tasks: task,
    });
  }
  changeTaskStatus(id) {
    let tasks = [...this.state.tasks];
    tasks.forEach((item) => {
      if (item.id == id) {
        item.active = false;
        item.endDate = new Date();
      }
    });
    this.setState({
      tasks: tasks,
    });
  }
  addTask(text, important, date) {
    const tasks = [...this.state.tasks];
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      endDate: "",
    };
    tasks.push(task);
    this.setState({
      tasks: tasks,
    });
    this.counter++;
    return true;
  }
  render() {
    return (
      <div className="App">
        <h1>ToDoApp</h1>
        <AddTask addTask={this.addTask.bind(this)} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask.bind(this)}
          status={this.changeTaskStatus.bind(this)}
        />
      </div>
    );
  }
}

export default App;
