const ENDPOINT = 'http://api.tvmaze.com/search/shows' //+ searchInput.value;

const fetchShows = () => fetch(ENDPOINT).then(response => response.json());

export default fetchShows;
