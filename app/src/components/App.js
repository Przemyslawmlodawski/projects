import React, { Component } from "react";
import "./App.css";
const data = [
  {
    id: 1,
    title: "Wiadomosc nr 1",
    body: "zawartosc wiadomosci nr 1...",
  },
  {
    id: 2,
    title: "Wiadomosc nr 2",
    body: "zawartosc wiadomosci nr 2...",
  },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc nr ${index}`,
    body: `Zawartosc wiadomosci nr ${index}`,
  });
}, 8000);
class App extends Component {
  state = {
    comments: [...data],
  };
  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.getData, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
