import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../utils/api';
import { TrendingThumb, TrendingList } from './Home.Styled';
import { Loader } from '../../utils/Loader';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getTrendMovie = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendMovies(response);
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getTrendMovie();
  }, []);

  return (
    <>
      <TrendingThumb>
        <h3>TRENDING NOW</h3>
        {loading && <Loader />}
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
