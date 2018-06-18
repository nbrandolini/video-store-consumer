import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from './Search'
import Video from './Video'

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    }
  }

  componentDidMount = () => {
    const THMD_URL = `https://api.themoviedb.org/3/search/movie?
    api_key=1108a394810c51779d4449631b00f9d2&query=${query_from_search_form}`

    axios.get(THMD_URL)
    .then( (response) => {
      console.log( response.data );
      this.setState({
        results: response.data
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
  }

  renderResultsList = () => {
    console.log('Rendering results');
    const componentList = this.state.results.map((movie, index) => {
      return (
        <Movie
          key={index}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.relase_date}
          poster_path={movie.poster_path}
        />
      );
    });

    return componentList;
  }

  render() {
    return (
      <section>
      <header>
        {this.state.message ? this.state.message: ""  }
      </header>
        {this.renderResultsList()}
        < Search addVideoCallback={this.query} />
      </section>
    )
  }

}

SearchResults.propTypes = {}

export default SearchResults;
