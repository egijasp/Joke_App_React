import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer as jokeReducer, reducerPath as jokeReducerPath } from '../services/joke';

const store = configureStore({
  reducer: {
    [jokeReducerPath]: jokeReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
