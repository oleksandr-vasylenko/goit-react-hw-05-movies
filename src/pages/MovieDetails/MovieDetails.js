import { useParams, Link, Outlet } from 'react-router-dom';
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

        return response;
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [moiveId]);

  const {
    id,
    poster_path,
    title,
    release_date,
    overview,
    vote_average,
    genres,
  } = movie;

  const poster = poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`;
  const yyyy = release_date && release_date.substring(0, 4);
  const rate = Math.round(vote_average * 10);
  const genresList =
    genres &&
    genres
      .map(({ name }) => {
        return name;
      })
      .join(', ');

  return (
    <>
      <div>
        <img src={poster} alt={title} width={200} />
        <h2>
          {title} ({yyyy})
        </h2>
        <p>User Score: {rate}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </div>

      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetails;
