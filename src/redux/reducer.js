import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/slices/board';
import post from 'redux/slices/post'

const reducer = combineReducers({ board, post });

export default reducer;
