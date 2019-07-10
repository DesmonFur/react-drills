import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './components/Todo'
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
constructor(){
  super()
  this.state = {
    list: [],
  }
}

// handleInputChange = (val) => {
//   console.log(this.state)
// this.setState({user:val})
// }

handleAddTask = (task) => {
  console.log(this.state)
  this.setState({
    list: [...this.state.list, task]
  })
}

render() {
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
    </div>
    
  );
}
}

export default App;
