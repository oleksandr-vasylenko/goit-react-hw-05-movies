import { useParams } from 'react-router-dom';

function MovieDetails() {
  const id = useParams().movieId;

  return (
    <>
      <p>MovieDetails component</p>
      <p>{id}</p>
    </>
  );
}

export default MovieDetails;
