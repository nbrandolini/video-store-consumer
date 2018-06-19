import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    console.log('Rendering...');
    let imgURL = `https://image.tmdb.org/t/p/w185${this.props.image_url}`;
    return (
      <article>
         <h3>Title {this.props.title} </h3>
         <p><strong>Overview: </strong> {this.props.overview}</p>
         <p><strong>Release Date: </strong> {this.props.release_date}</p>
         <img src={imgURL} alt='Movie Poster'/>
      </article>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview:  PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
};

export default Movie;
