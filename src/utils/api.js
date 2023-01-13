import axios from 'axios';

const KEY = '68f9ac02869bbba2dc968e1b369c4856';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: KEY,
};

const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week');

  return response.data;
};

// const getMovieByID = async id => {
//   const response = await axios.get(`/movie/${id}`);

//   return response.data;
// };

// const getMovieCreditsByID = async id => {
//   const response = await axios.get(`/movie/${id}/credits`);

//   return response.data.cast;
// };

// const getMovieReviewsByID = async id => {
//   const response = await axios.get(`/movie/${id}/reviews`);
//   return response.data.results;
// };

// const getMovieByQuery = async query => {
//   const response = await axios.get('/search/movie', {
//     params: {
//       query: query,
//     },
//   });

//   return response.data.results;
// };

export {
  getTrendingMovies,
  // getMovieByID,
  // getMovieCreditsByID,
  // getMovieReviewsByID,
  // getMovieByQuery,
};
