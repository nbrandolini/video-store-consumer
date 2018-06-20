import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customer.css';

class Customer extends Component {

  selectedCustomerCallback = () => {
    console.log(this.props);
    this.props.selectedCustomerCallback(this.props.name, this.props.id);
  };

  render() {
    console.log('some customer');
    return (
      <article className="customer">
        <h3>{this.props.name}</h3>
        <p>Checked Out Movies Count: {this.props.checkedOutMoviesCount}</p>
        <button onClick={this.selectedCustomerCallback} >Select This Customer</button>
      </article>
    );
  }
}

export default Customer;

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  selectedCustomerCallback: PropTypes.func.isRequired,
  checkedOutMoviesCount: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
