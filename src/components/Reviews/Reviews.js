import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsByID } from '../../utils/api';

function Cast() {
  const [movie, setMovie] = useState([]);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const response = await getMovieReviewsByID(moiveId);
        setMovie(response);

        return response;
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [moiveId]);

  return (
    <>
      <ul>
        {movie.map(item => (
          <li key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
