import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/slices/board';
import post from 'redux/slices/post';
import clubhome from './slices/clubhome';

const reducer = combineReducers({ board, post, clubhome });

export default reducer;
