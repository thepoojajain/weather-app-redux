import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import weather from './reducers/weatherReducer';

export default configureStore({
  reducer: {
    weather,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
