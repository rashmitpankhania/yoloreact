import React, { Component } from 'react';
import './App.css';
import  Home  from "./HomeFolder/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RoutedApp = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoutedApp/>
        <Home />
      </div>
    );
  }
}

export default RoutedApp;
