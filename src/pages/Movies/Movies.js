import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../../utils/api';
import { Link, useLocation } from 'react-router-dom';
import { MovieSearch, SearchForm, FoundList } from './Movies.Styled';
import { Loader } from '../../utils/Loader';

function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    const searchMovie = async () => {
      try {
        setLoading(true);
        const searchedMovies = await getMovieByQuery(query);
        if (searchedMovies) {
          setResults(searchedMovies);
        }
      } catch {
        setError('Something went wrong. Please try again.');
        return error;
      } finally {
        setLoading(false);
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
    <MovieSearch>
      {loading && <Loader />}
      <SearchForm onSubmit={onSearch}>
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
      </SearchForm>
      <FoundList>
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
      </FoundList>
    </MovieSearch>
  );
}

export default Movies;
