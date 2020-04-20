const ENDPOINT = 'http://api.tvmaze.com/shows' 

const fetchShows = () => fetch(ENDPOINT).then(response => response.json());

export default fetchShows;
