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
    return (
      <article className="customer">
        <h3>{this.props.name}</h3>
        <p>Phone: {this.props.phone}</p>
        <p>Account Credit: ${this.props.accountCredit}</p>
        <p>Checked Out Movies Count: {this.props.checkedOutMoviesCount}</p>
        <br/>
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
  phone: PropTypes.string.isRequired,
  accountCredit: PropTypes.string.isRequired,
};
