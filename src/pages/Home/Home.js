import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../utils/api';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => setTrendMovies(movies.results));
  }, []);

  return (
    <>
      <div>
        <h2>Trending Movies</h2>
        <ul>
          {trendMovies.map(item => {
            return (
              <Link to={`/movies/${item.id}`} key={item.id}>
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
