import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../utils/api';
import { TrendingThumb, TrendingList } from './Home.Styled';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => setTrendMovies(movies.results));
  }, []);

  return (
    <>
      <TrendingThumb>
        <h3>TRENDING NOW</h3>
        <TrendingList>
          {trendMovies.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </TrendingList>
      </TrendingThumb>
    </>
  );
}

export default Home;
