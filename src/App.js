import React, { Component } from "react";

import Todo from "./Todo";
import "./App.css";

class App extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <Todo list={list} />
      </div>
    );
  }
}

export default App;
