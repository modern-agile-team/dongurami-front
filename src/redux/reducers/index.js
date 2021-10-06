import { combineReducers } from '@reduxjs/toolkit';
import board from 'redux/reducers/board';

const reducer = combineReducers({ board });

export default reducer;
