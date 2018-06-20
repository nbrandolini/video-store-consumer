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
import Library from './components/Library';
import Customers from './components/Customers';

const URL = `http://localhost:3000/rentals/`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: ' ',
      selectedCustomer: '',
      selectedCustomerId: '',
    };
  }

  renderMessage = () => {
    if (this.state.message) {
      return (
        <p>{this.state.message}</p>
      );
    }
  };

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  };

  setSelectedCustomer = (name, id) => {
    this.setState({
      selectedCustomer: name,
      selectedCustomerId: id,
    });
  };

  createRental=() => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    axios.post(URL + `${this.state.selectedMovie}/check-out?customer_id=${this.state.selectedCustomerId}&due_date=${date}`)
    .then((response) => {
      console.log(response);
      this.setState({
        message: 'Succesfully added a new rental!',
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

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
      <li><Link to="/library">Library</Link></li>
      <li>Selected Movie: {this.state.selectedMovie}</li>
      <li>Selected Customer: {this.state.selectedCustomer}</li>
      <button className="button" onClick={this.createRental}>Create Rental</button>
      {this.renderMessage()}
      </ul>

      <hr/>

      <Route exact path="/" component={home}/>
      <Route path="/search" component={SearchResults}/>
      <Route path="/library"
      render={(props) => <Library {...props} selectedMovieCallback={this.setSelectedMovie} />}
      />
      <Route path="/customers"
      render={(props) => <Customers {...props} selectedCustomerCallback={this.setSelectedCustomer} />}
      />
      </section>
      </Router>

    );
  }
}

export default App;
