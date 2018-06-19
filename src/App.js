import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Movie Store</h1>
        </header>
        <SearchResults/>



      </div>
    );
  }
}

export default App;
