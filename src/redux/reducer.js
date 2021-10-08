import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/slices/board';

const reducer = combineReducers({ board });

export default reducer;
