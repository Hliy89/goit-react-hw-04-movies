import React, { Component } from 'react';
import axios from 'axios';

// import styles from './TrendingMoviePage.module.css';

import FilmList from '../../components/FilmList';

class TrendingMoviePage extends Component {
  state = {
    films: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=923c2cf88ec4338da74c768a045101f0',
      );
      this.setState(({ films }) => {
        return {
          films: [...films, ...data.results],
          isLoading: false,
        };
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error,
      });
    }
  }

  render() {
    const { isLoading, error, films } = this.state;
    return (
      <>
        {isLoading && <p>Loading ...</p>}
        {error && <p>Загрузка не удалась</p>}
        <FilmList films={films} />
      </>
    );
  }
}

export default TrendingMoviePage;
