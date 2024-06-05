import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieReducer';

export default configureStore({
  reducer: {
    movieData : movieReducer
  },
})