import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SharedLayout from '../../pages/SharedLayout ';
import Home from '../../pages/Home/Home';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Movies from '../Movies/Movies';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import NotFound from '../NotFound/NotFound';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
