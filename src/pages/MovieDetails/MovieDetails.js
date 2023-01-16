import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../../utils/api';
import {
  MovieDetailsThumb,
  GeneralDetails,
  AdditionalInfo,
  AddInfoList,
} from './MovieDetails.Styled';
import { Loader } from '../../utils/Loader';

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const moiveId = useParams().movieId;

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await getMovieByID(moiveId);
        setMovie(response);

        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [moiveId]);

  const { poster_path, title, release_date, overview, vote_average, genres } =
    movie;

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
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieDetailsThumb>
      {loading && <Loader />}
      <Link to={backLinkHref}>BACK</Link>

      <GeneralDetails>
        <img src={poster} alt={title} width={300} />
        <h2>
          {title} ({yyyy})
        </h2>
        <p>User Score: {rate}%</p>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </GeneralDetails>

      <AdditionalInfo>
        <h3>Additional Information</h3>
        <AddInfoList>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </AddInfoList>
      </AdditionalInfo>
      <Outlet />
    </MovieDetailsThumb>
  );
}

export default MovieDetails;
