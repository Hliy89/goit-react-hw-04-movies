import React, { Component } from 'react';
import axios from 'axios';

import styles from './MovieCastPage.module.css';

import OneFilm from '../../components/OneFilm/OneFilm';

class MovieCastPage extends Component {
  state = { cast: [] };

  async componentDidMount(e) {
    try {
      const { match } = this.props;
      const { movieId } = match.params;

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US`,
      );
      this.setState({ cast: response.data.cast });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { match } = this.props;
    const { movieId } = match.params;
    const { cast } = this.state;
    const url = 'https://image.tmdb.org/t/p/w500/';

    const castElem = cast.map(actor => {
      return (
        <li key={actor.id}>
          <img
            className={styles.imageActor}
            src={`${url}${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      );
    });
    return (
      <OneFilm filmId={movieId}>
        {cast.length > 0 && <ul>{castElem}</ul>}
        {!cast.length && <p>We don't have any cast for this movie</p>}
      </OneFilm>
    );
  }
}

export default MovieCastPage;
