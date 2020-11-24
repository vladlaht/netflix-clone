import {API_KEY} from "../constants";

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ru`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=ru`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ru`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=ru`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=ru`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=ru`,
};

export const getMovieInfo = (movieId) => {
    return `/tv/${movieId}?api_key=${API_KEY}&language=ru`;
};

