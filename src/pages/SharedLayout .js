import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

function SharedLayout() {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </>
  );
}

export default SharedLayout;
