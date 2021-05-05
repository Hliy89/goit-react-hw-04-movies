import React, { Component } from 'react';
import axios from 'axios';

import FilmList from '../../components/FilmList';

import styles from './MovieSearchPage.module.css';

class MovieSearchPage extends Component {
  state = {
    films: [],
    query: '',
    currentPage: 1,
    readyFetch: false,
  };

  async componentDidUpdate() {
    const { query, readyFetch, currentPage } = this.state;
    try {
      if (readyFetch) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&query=${query}&page=${currentPage}`,
        );
        this.setState({
          readyFetch: false,
          query: '',
          films: response.data.results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      readyFetch: true,
    });
  };

  render() {
    const { films } = this.state;

    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
            <input
              value={this.state.query}
              onChange={this.handleChange}
              className={styles.SearchFormInput}
              type="text"
              placeholder="Search films"
            />
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>
          </form>
        </div>
        {films.length > 0 && <FilmList films={films} />}
      </>
    );
  }
}

export default MovieSearchPage;
