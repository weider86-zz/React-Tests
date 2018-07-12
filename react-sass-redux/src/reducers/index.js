import { counterReducer } from './counter_reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  counterState: counterReducer
});