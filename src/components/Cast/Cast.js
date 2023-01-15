import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieCreditsByID } from '../../utils/api';

function Cast() {
  const [movie, setMovie] = useState([]);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const response = await getMovieCreditsByID(moiveId);
        setMovie(response);
        // console.log(response);
        return { response };
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [moiveId]);

  return (
    <>
      <ul>
        {movie.map(item => {
          return (
            <li key={item.id}>
              <img
                src={
                  item.profile_path &&
                  `https://image.tmdb.org/t/p/w500${item.profile_path}`
                }
                alt={item.original_name}
                width={100}
              />
              {item.original_name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cast;
