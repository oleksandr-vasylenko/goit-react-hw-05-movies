import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getTrendingMovies from '../../utils/api';
// import Movies from '../Movies/Movies';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => setTrendMovies(movies.results));
  }, []);

  return (
    <>
      <p>Trending Movies</p>
      <ul>
        {trendMovies.map(item => {
          return (
            <Link to="/movies/:movieId/reviews" key={item.id}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
