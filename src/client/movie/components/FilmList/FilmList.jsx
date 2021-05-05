import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FilmList.module.css';

const FilmList = ({ films }) => {
  const url = 'https://image.tmdb.org/t/p/w500/';
  const filmElements = films.map(film => (
    <li key={film.id} className={styles.filmListItem}>
      <Link to={`/movies/${film.id}`}>
        <img
          className={styles.imageFilm}
          src={`${url}${film.poster_path}`}
          alt={film.original_title}
        />
        <h3>{film.title || film.original_name}</h3>
      </Link>
    </li>
  ));
  return <ul className={styles.filmList}>{filmElements}</ul>;
};

export default FilmList;
