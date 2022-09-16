const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '29972596-184f280b38cc30846c7b002d8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

export default async function fetchImage(searchQuery = '', page = 1) {
  const url = `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
}
