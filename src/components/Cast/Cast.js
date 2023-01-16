import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCreditsByID } from '../../utils/api';
import placeholder from '../../images/placeholder.png';
import { CastList, ActorItem, ActorName } from './Cast.Styled';
import { Loader } from '../../utils/Loader';

export default function Cast() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setLoading(true);
        const response = await getMovieCreditsByID(moiveId);
        setMovie(response);

        return { response };
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
      <CastList>
        {loading && <Loader />}
        {!movie.length ? (
          <p>We don't have any cast for this movie</p>
        ) : (
          movie.map(item => {
            return (
              <ActorItem key={item.id}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                      : placeholder
                  }
                  alt={item.original_name}
                  width={150}
                />
                <ActorName>{item.original_name}</ActorName>
              </ActorItem>
            );
          })
        )}
      </CastList>
    </>
  );
}
