import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyle';
import { SharedLayout } from '../../pages/SharedLayout/SharedLayout ';
// import { lazy } from 'react';
import Home from '../../pages/Home/Home';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Movies from '../../pages/Movies/Movies';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import NotFound from '../NotFound/NotFound';

// const Home = lazy(() => import('../../pages/Home/Home'));
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const MovieDetails = lazy(() =>
//   import('../../pages/MovieDetails/MovieDetails')
// );
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
