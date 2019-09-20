import React, { Component } from "react";
import routes from './routes'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import House from './components/House'
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">
    <Header/>
    <Dashboard/>
    <House/>
    {routes}
    </div>;
  }
}

export default App;
