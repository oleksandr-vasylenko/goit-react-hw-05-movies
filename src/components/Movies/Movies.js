// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Movies() {
  // const [query, setQuery] = useState('')

  return (
    <>
      <p>Movies Search will be here</p>

      <input></input>
      <Outlet />
    </>
  );
}

export default Movies;
