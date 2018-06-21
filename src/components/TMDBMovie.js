import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TMDBMovie extends Component {

  addToLibrary = () => {
    console.log(`${this.props.image_url}`);
    const URL = 'http://localhost:3000/movies/'
    axios.post(URL + `?title=${this.props.title}&release_date=${this.props.release_date}&poster_path=${this.props.image_url}&overview=${this.props.overview}`)
    .then( (response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log('got to the error');
      console.log(error);
      this.setState({
        error: error.message
      });
    });
  };

  render() {
    console.log(this.props);
    return (
      <article>
         <h3>Title {this.props.title} </h3>
         <p><strong>Overview: </strong> {this.props.overview}</p>
         <p><strong>Release Date: </strong> {this.props.release_date}</p>
         <img src={this.props.image_url} alt='Movie Poster'/>
         <button onClick={this.addToLibrary}>Add To Library </button>
      </article>
    );
  }
}

TMDBMovie.propTypes = {
  title: PropTypes.string.isRequired,
  overview:  PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
};

export default TMDBMovie;
