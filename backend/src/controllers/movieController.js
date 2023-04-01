const axios = require('axios');
const asyncHandler = require('express-async-handler');

const base = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_API_KEY;

const getPopularMovies = asyncHandler(async (req, res) => {
  const response = await axios.get(
    `${base}/trending/movie/week?api_key=${key}`
  );

  const movies = response.data.results.slice(0, 6);

  res.json(movies);
});

module.exports = {
  getPopularMovies,
};
