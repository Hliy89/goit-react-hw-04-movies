import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../../../client/NavBar/NavBar';

const TrendingMoviePage = lazy(() =>
  import('../../../client/movie/pages/TrendingMoviePage'),
);
const MovieSearchPage = lazy(() =>
  import('../../../client/movie/pages/MovieSearchPage'),
);
const OneMoviePage = lazy(() =>
  import('../../../client/movie/pages/OneMoviePage'),
);
const MovieCastPage = lazy(() =>
  import('../../../client/movie/pages/MovieCastPage'),
);
const MovieReviewsPage = lazy(() =>
  import('../../../client/movie/pages/MovieReviewsPage'),
);
const NotFound = lazy(() => import('../NotFound/NotFound'));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<p>Page loading...</p>}>
        <Switch>
          <Route path="/" exact component={TrendingMoviePage} />
          <Route path="/movies" exact component={MovieSearchPage} />
          <Route path="/movies/:id" exact component={OneMoviePage} />
          <Route path="/movies/:movieId/cast" exact component={MovieCastPage} />
          <Route
            path="/movies/:movieId/reviews"
            exact
            component={MovieReviewsPage}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

// TrendingMoviePage
// https://api.themoviedb.org/3/trending/all/day?api_key=923c2cf88ec4338da74c768a045101f0
// MovieSearchPage
// https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=1&include_adult=false&query={dfgdgfdgdfg}
// OneMoviePage
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US
// MovieCastPage
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US
// MovieReviewsPage
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=1
