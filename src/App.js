import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
// import {
//    BrowserRouter as Router,
//    Route,
//    Link
//  } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Customers from './components/Customers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Movie Store</h1>
        </header>
        <Search></Search>

      </div>
    );
  }
}

export default App;
