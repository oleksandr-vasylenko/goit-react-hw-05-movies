import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '68f9ac02869bbba2dc968e1b369c4856';

export async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY}`
  );

  return response.data.results;
}
