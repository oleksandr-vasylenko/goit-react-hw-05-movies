import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../Movies/Movies';
import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { getTrending } from '../../utils/api';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

export const App = () => {
  console.log(getTrending().then(res => console.log(res)));

  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
