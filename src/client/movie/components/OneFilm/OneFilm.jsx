import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './OneFilm.module.css';

class OneFilm extends React.Component {
  state = {
    filmsDetails: {},
    genres: [],
  };

  async componentDidMount() {
    try {
      const { filmId } = this.props;

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US`,
      );

      this.setState({
        filmsDetails: data,
        genres: data.genres,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { filmsDetails, genres } = this.state;
    const url = 'https://image.tmdb.org/t/p/w500/';
    const { filmId } = this.props;

    const oneFilmChildren = this.props.children;
    const genreEl = genres.map(({ name, id }) => <li key={id}>{name}</li>);

    return (
      <div>
        <Link to={'/'}>Go back</Link>
        <div className={styles.oneMovie}>
          <img
            className={styles.imageFilm}
            src={`${url}${filmsDetails.poster_path}`}
            alt={filmsDetails.original_title}
          />
          <div>
            <h2>{filmsDetails.title || filmsDetails.original_name}</h2>
            <h3>Overview</h3>
            <p>{filmsDetails.overview}</p>
            <h3>Genres</h3>
            <ul>{genreEl}</ul>
          </div>
        </div>
        <ul>
          <li>
            <Link to={`/movies/${filmId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${filmId}/reviews`}>Reviews</Link>
          </li>
        </ul>

        {oneFilmChildren}
      </div>
    );
  }
}

export default OneFilm;
