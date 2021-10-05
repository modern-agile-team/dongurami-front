import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

const store = configureStore({
  reducer
});

export default store;
