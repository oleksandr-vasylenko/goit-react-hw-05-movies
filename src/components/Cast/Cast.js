import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCreditsByID } from '../../utils/api';
import placeholder from '../../images/placeholder.png';
import { CastList, ActorItem, ActorName } from './Cast.Styled';

function Cast() {
  const [movie, setMovie] = useState([]);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const response = await getMovieCreditsByID(moiveId);
        setMovie(response);

        return { response };
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [moiveId]);

  return (
    <>
      <CastList>
        {movie.map(item => {
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
        })}
      </CastList>
    </>
  );
}

export default Cast;
