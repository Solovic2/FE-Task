const requests = {
  fetchMovies: `/movie/popular`,
  fetchSearchMovies: `/search/movie`,
  fetchMovieDetails: (id: string) => `/movie/${id}`,
  fetchSimilarMovies: (id: string) => `/movie/${id}/similar`,
  basic_imageUrl: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/",
};
export default requests;
