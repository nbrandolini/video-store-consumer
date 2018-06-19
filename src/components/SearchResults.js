import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from './Search';
import Movie from './Movie';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  movieSearch = (movie) => {

    axios.get(`http://localhost:3000/movies?query=${movie}`)
    .then( (response) => {
      console.log( response.data );
      this.setState({
        results: response.data
      });
    })
    .catch((error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    });
  };

  renderResultsList = () => {
    console.log('Rendering results');
    const componentList = this.state.results.map((movie, index) => {
      return (
        <Movie
          key={index}
          id={movie.id}
          title={movie.title}
          image_url={movie.image_url}
          overview={movie.overview}
          release_date={movie.release_date}
        />
      );
    });

    return componentList;
  };

  render() {
    return (
      <section>
      <header>
        { this.state.message ? this.state.message: ''  }
      </header>
        {this.renderResultsList()}
        <Search searchByTitle={this.movieSearch}/>
      </section>
    );
  }

}

SearchResults.propTypes = {};

export default SearchResults;
