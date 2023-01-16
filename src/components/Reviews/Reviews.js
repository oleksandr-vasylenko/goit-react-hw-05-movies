import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsByID } from '../../utils/api';
import { ReviewsList, ReviewItem } from './Reviews.Styled';
import { Loader } from '../../utils/Loader';

function Reviews() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setLoading(true);
        const response = await getMovieReviewsByID(moiveId);
        setMovie(response);

        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieCredits();
  }, [moiveId]);

  return (
    <>
      <ReviewsList>
        {loading && <Loader />}
        {!movie.length ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          movie.map(item => (
            <ReviewItem key={item.id}>
              <h4>{item.author}</h4>
              <p>{item.content}</p>
            </ReviewItem>
          ))
        )}
      </ReviewsList>
    </>
  );
}

export default Reviews;
