import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

type JokesCategories = {
  categories: string[],
}

type JokeById = {
  category: string,
  type: string,
  joke: string,
  id: number,
}

type Joke = {
  error: boolean,
  amount: number,
  message?: string
  causedBy: string[],
  jokes: JokeById[],
}

export const jokeApi = createApi({
  reducerPath: 'joke',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: (builder) => ({
    getJokeCategories: builder.query<JokesCategories, undefined>({
      query: () => 'categories',
    }),
    getJokesFromCategory: builder.query<Joke, string>({
      query: (category) => `joke/${category}?type=single&amount=10`,
    }),
    getJokeById: builder.query<JokeById, {category: string, id: string}>({
      query: ({ category, id }) => `joke/${category}?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer, reducerPath } = jokeApi;

export const { useGetJokeCategoriesQuery, useGetJokesFromCategoryQuery, useGetJokeByIdQuery } = jokeApi;
