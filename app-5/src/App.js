import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
   <Image url={'https://i.pinimg.com/236x/d8/aa/46/d8aa46f8a33fc67bbbabe23dfbb81bc7--random-meme-a-potato.jpg'} />
        
      </div>
    );
  }
}

export default App;
