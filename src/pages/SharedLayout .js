import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <p>Shared Layout Container</p>
      <Outlet />
    </>
  );
}

export default SharedLayout;
