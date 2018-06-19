import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SearchResults from './components/SearchResults';

import Customers from './components/Customers';

class App extends Component {

  render() {

    const home = () => {
      return (<p>Welcome!</p>);
    };

    return (

      <Router>
        <section>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">SearchResults</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={home}/>
        <Route path="/search" component={SearchResults}/>
        <Route path="/customers" component={Customers}/>
        </section>
      </Router>

    );
  }
}

export default App;
