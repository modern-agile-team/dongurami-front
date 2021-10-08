import { configureStore } from '@reduxjs/toolkit';
import reducer from 'redux/reducer';

const store = configureStore({
  reducer
});

export default store;
