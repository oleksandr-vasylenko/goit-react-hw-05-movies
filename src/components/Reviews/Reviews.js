import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsByID } from '../../utils/api';
import { ReviewsList, ReviewItem } from './Reviews.Styled';

function Reviews() {
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
      <ReviewsList>
        {movie.map(item => (
          <ReviewItem key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </ReviewItem>
        ))}
      </ReviewsList>
    </>
  );
}

export default Reviews;
