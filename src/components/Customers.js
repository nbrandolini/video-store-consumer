import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer'
class Customers extends Component {

  constructor() {
    super();

    this.state = {
      customersList: [],
    };
  }

  componentDidMount = () => {
    const URL = `http://localhost:3002/customers/`

    axios.get(URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        customersList: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        error: error.message,
      });
    })
  }
  renderCustomersList = () => {
    const customersList = this.state.customersList.map((customer, index) => {
      console.log(customer.name)
      return (
        <Customer
        key = {index}
        name = {customer.name}
        />
      );
    });
    return (
      <section>
      <h3>Customers List</h3>
      <ul>{this.renderCustomersList()}</ul>
      </section>
    );
  };
}

export default Customers;
