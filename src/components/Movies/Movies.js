import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../../utils/api';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

function Movies() {
  const [query, setQuery] = useSearchParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const searchedMovies = await getMovieByQuery(query);
        if (searchedMovies) {
          setResults(searchedMovies);
        }
      } catch {
        setError('Something went wrong. Please try again.');
        return error;
      }
    };
    query !== null && searchMovie();
  }, [query, error]);

  const onSearch = e => {
    e.preventDefault();
    const request = e.target.elements.input.value;
    request === '' ? alert('Type something!') : setQuery(request);
    e.target.elements.input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {query &&
          results.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Movies;
