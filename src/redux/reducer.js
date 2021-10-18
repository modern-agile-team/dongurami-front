import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/slices/board';
import post from 'redux/slices/post';
import clubhome from './slices/clubhome';
import promotionpost from './slices/promotionpost';

const reducer = combineReducers({ board, post, clubhome, promotionpost });

export default reducer;
