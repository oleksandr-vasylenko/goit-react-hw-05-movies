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
              <Link to={`/movies/${item.id}`} key={item.id}>
                <li>{item.title}</li>
              </Link>
            );
          })}
        </TrendingList>
      </TrendingThumb>
    </>
  );
}

export default Home;
