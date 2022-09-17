function pixFetch(searchValue, PAGE = 1) {
  const BASIC_URL = `https://pixabay.com/api/`;
  const searchParam = new URLSearchParams({
    key: '29972596-184f280b38cc30846c7b002d8',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${PAGE}`,
    per_page: 12,
  });

  return fetch(`${BASIC_URL}?${searchParam}`).then(response => response.json());
}

export default pixFetch;

// const axios = require('axios');
// const BASE_URL = 'https://pixabay.com/api/';

// const searchParams = new URLSearchParams({
//   key: '29972596-184f280b38cc30846c7b002d8',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 12,
// });

// export default async function fetchImage(searchQuery = '', page = 1) {
//   const url = `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${page}`;
//   const response = await axios.get(url);
//   return response.data;
// }
