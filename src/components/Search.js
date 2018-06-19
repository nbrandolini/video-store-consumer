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
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.title.length > 0;
  }

  clearForm = () => {
    this.setState({
      title: '',
      overview:  '',
      relase_date: '',
      poster_path: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.valid()) {
      this.props.addMovieCallback(this.state.title);
      this.clearForm();
    }
  }

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
            id="title"
            />
        </div>
        <input type="submit" value="Search" />
      </form>
    );
  }

}

Search.propTypes = {
  addMovieCallback: PropTypes.func.isRequired,
};

export default Search;
