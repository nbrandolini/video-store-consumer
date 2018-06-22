import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  selectedMovieCallback = () => {
    this.props.selectedMovieCallback(this.props.title)
  };

  render() {
    console.log(this.props)
    return (
      <article className='movie'>
         <h3> {this.props.title} </h3>
         <p><strong>Overview: </strong> {this.props.overview}</p>
         <p><strong>Release Date: </strong> {this.props.release_date}</p>
         <img src={this.props.image_url} alt='Movie Poster'/>
         <br/>
         <button onClick={this.selectedMovieCallback}>Select This Movie </button>
      </article>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview:  PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  selectedMovieCallback: PropTypes.func.isRequired,
};

export default Movie;
