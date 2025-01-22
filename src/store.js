import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movies/movieSlice'
import counterReducer from './features/counter/counterSlice'
import authReducer from './features/auth/authAction'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    auth: authReducer
  },
})