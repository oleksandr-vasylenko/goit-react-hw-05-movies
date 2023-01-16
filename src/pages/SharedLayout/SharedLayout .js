import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from './SharedLayout.Styled';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            Loading...
            <Loader />
          </div>
        }
      >
        <NavBar>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/movies">MOVIES</StyledLink>
        </NavBar>
        <Outlet />
      </Suspense>
    </>
  );
};
