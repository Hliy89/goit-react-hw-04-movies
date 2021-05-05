import React, { Component } from 'react';

import OneFilm from '../../components/OneFilm/OneFilm';

class OneMoviePage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return <OneFilm filmId={id}></OneFilm>;
  }
}

export default OneMoviePage;
