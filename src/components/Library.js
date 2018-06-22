import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };

  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/movies`)
    .then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  };

  renderMovieList = () => {
    const componentList = this.state.movies.map((movie, index) => {
      return (
        <Movie
        key={index}
        id={movie.id}
        image_url={movie.image_url}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        selectedMovieCallback={this.props.selectedMovieCallback }
        />

      );
    });
    return componentList;
  };

  render() {
    return (
      <section className='library'>
      <header><h3> Library </h3></header>

      <p>{this.state.error}</p>

      <ul><li>{ this.renderMovieList()}</li></ul>
      </section>
    );
  }

}

export default Library;

Library.propTypes = {
  selectedMovieCallback: PropTypes.func.isRequired,
}
