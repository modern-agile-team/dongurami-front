import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/slices/board';
import post from 'redux/slices/post';
import clubhome from './slices/clubhome';
import user from 'redux/slices/user';
import calendar from './slices/calendar';
import changeComp from 'redux/slices/chageComp';

const reducer = combineReducers({
  board,
  post,
  clubhome,
  user,
  calendar,
  changeComp
});

export default reducer;
