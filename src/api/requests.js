import {API_KEY} from "../constants";

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=en-US`,
};

export const getMovieInfo = (movieId) => {
    return `/tv/${movieId}?api_key=${API_KEY}&language=en-US`;
};

