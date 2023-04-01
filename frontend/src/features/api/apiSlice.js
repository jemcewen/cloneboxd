import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => '/movies/popular',
    }),
  }),
});

export const { useGetPopularMoviesQuery } = apiSlice;
