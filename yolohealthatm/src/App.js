import React, { Component } from 'react';
import './App.css';
import { Home, HomeButton }  from "./HomeFolder/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export {App};
