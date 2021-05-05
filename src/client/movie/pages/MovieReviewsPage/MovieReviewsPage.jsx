import React, { Component } from 'react';
import axios from 'axios';

// import styles from './MovieReviewsPage.module.css';

import OneFilm from '../../components/OneFilm/OneFilm';

class MovieReviewsPage extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    try {
      const { match } = this.props;
      const { movieId } = match.params;

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=1`,
      );
      this.setState({ reviews: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { match } = this.props;
    const { movieId } = match.params;
    const { reviews } = this.state;
    const reviewsElem = reviews.map(item => {
      return (
        <li key={item.id}>
          <p>{item.author}</p>
          <p>{item.content}</p>
        </li>
      );
    });
    return (
      <OneFilm filmId={movieId}>
        {reviews.length > 0 && <ul>{reviewsElem}</ul>}
        {!reviews.length && <p>We don't have any reviews for this movie</p>}
      </OneFilm>
    );
  }
}

export default MovieReviewsPage;
