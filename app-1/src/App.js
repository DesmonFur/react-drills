import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


   class App extends Component{
    constructor(){
        super()
    
    this.state  = {
        input: ' '
    }
    
    }
    
change(val){
  this.setState({
    input: val
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange = {e => this.change(e.target.value)}/>
          <h2>{this.state.input}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
