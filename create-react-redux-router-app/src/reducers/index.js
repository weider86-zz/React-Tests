import { clickReducer } from './clickReducer';
import { counterReducer } from './counterReducer';
import { homeReducer } from './homeReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  countState: counterReducer,
  homeState: homeReducer
});