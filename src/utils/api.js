import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const KEY = '68f9ac02869bbba2dc968e1b369c4856';

export async function fetchImages(input, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: KEY,
      q: input,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });

  return response.data;
}
