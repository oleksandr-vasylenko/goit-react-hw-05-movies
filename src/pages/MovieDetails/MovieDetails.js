import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../../utils/api';

function MovieDetails() {
  const [movie, setMovie] = useState([]);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getMovieByID(moiveId);
        setMovie(response);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [moiveId]);

  const { poster_path, title, release_date, overview, vote_average, genres } =
    movie;

  return (
    <>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={200}
      />
      <h2>
        {title} ({release_date && release_date.substring(0, 4)})
      </h2>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>
        {genres &&
          genres
            .map(({ name }) => {
              return name;
            })
            .join(', ')}
      </p>
    </>
  );
}

export default MovieDetails;
