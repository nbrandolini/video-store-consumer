import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      overview:  '',
      relase_date: '',
      poster_path: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  };

  valid = () => {
    return this.state.title.length > 0;
  };

  clearForm = () => {
    this.setState({
      title: '',
      overview:  '',
      relase_date: '',
      poster_path: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title);
    if (this.valid()) {
      this.props.searchByTitle(this.state.title);
      this.clearForm();
    }
  };

  static propTypes = {
    searchByTitle: PropTypes.func.isRequired
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <div>
          <label htmlFor="name">Title: </label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.onFieldChange}
            type="text"

            />
        </div>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
