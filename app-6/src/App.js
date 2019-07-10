import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
constructor(){
  super()
  this.state = {
    list: [],
    user: '',
  }
}

handleInputChange = (val) => {
  console.log(this.state)
this.setState({user:val})
}

handleAddTask = () => {
  console.log(this.state)
  this.setState({
    list: [...this.state.list, this.state.user],
    input: ''
  })
}


  render() {
    let list = this.state.list.map((e,i) => {
      return <Todo key={i} task={e} />
    })
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          
          <input value={this.state.user} placeholder='Enter new task' onChange={e => this.handleInputChange(e.target.value)}/> 
          <button onClick = {this.handleAddTask}> Add </button>
        </div>
{list}
      </div>
    );
  }
}

export default App;
