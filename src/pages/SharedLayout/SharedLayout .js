import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from './SharedLayout.Styled';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  &.active {
    color: orange;
  }
`;

function SharedLayout() {
  return (
    <>
      <NavBar>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/movies">MOVIES</StyledLink>
      </NavBar>
      <Outlet />
    </>
  );
}

export default SharedLayout;
