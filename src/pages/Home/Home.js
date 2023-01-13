import { useState, useEffect } from 'react';
import getTrendingMovies from '../../utils/api';
// import Movies from '../Movies/Movies';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => setTrendMovies(movies.results));
  }, []);

  return (
    <>
      <p>Trending movies will be here</p>
      <ul>
        {trendMovies.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export default Home;
