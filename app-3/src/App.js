import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor(){
  super()
  this.state =  {
    notDogs: ['Dangle','Derrier','Donton', 'Broud,', 'Botta', 'Byt', 'Cowol'],
      userInput: '',
      filteredNotDogs: []
    }
}

change(inp){
  this.setState({userInput: inp})
}

// filteredNotDogs(){
//   let notDogs = this.state.notDogs.filter((e,i) => {
//     return e.includes(this.state.userInput)
//   }) 
//   .map((e,i) => { return {i} + {e} })
// } 





  render() {
    let notDogs = this.state.notDogs.filter((e,i) => {
          return e.includes(this.state.userInput)
        }) 
        .map((e,i) => { return <h2 key = {i}> {e}  }) </h2>
      })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2> <input type="text" onChange= {(e) => this.change(e.target.value)}/> FILTER </h2>
        {notDogs}
        
      </div>
    );
  }
}

export default App;
