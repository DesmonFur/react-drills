import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor(){
  super()

  this.state = {
    listed: [
      'bologna',
      'branid',
      'liahf',
      'fhail'
    ]
  }
}

//  list(el,i){
//   this.state.listed.map((el,i) => {
//     return <h2> key={i}> {el}  </h2>
//   })
// }


  render() {
    let list = this.state.listed.map((el,i) => {
      return <h2 key={i}> {el} </h2>
    } )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>{list}</h2>
      </div>
    );
  }
}

export default App;
