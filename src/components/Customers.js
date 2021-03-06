import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer.js'
import './Customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customersList: [],
    };
  }

  componentDidMount = () => {
    console.log('Component did mount was called');
    axios.get(`http://localhost:3000/customers/`)
    .then((response) => {
      console.log(response.data);
      this.setState({ customersList: response.data });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ message: error.message });
    });
  };

  renderCustomersList = () => {
    const customersList = this.state.customersList.map((customer) => {
      return (
        <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
        phone={customer.phone}
        accountCredit={customer.account_credit}
        checkedOutMoviesCount={customer.movies_checked_out_count}
        selectedCustomerCallback={this.props.selectedCustomerCallback}
        />
      );
    });
    return customersList;
  };

  render() {
    return (
      <section className="customers">
      <h3>Customers List</h3>
      <ul><li>{this.renderCustomersList()}</li></ul>
      </section>
    );
  }
}

export default Customers;

Customers.propTypes = {
  checkedOutMoviesCount: PropTypes.func.isRequired,
  selectedCustomerCallback: PropTypes.func.isRequired,

};
