import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;
    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:MovieID" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
