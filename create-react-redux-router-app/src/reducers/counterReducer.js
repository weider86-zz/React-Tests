import { COUNTER_UPDATE_INCREMENT } from '../actions/actionTypes';
import { COUNTER_UPDATE_DECREMENT } from '../actions/actionTypes';

const initialState = {
  newCounterValue: 'Counter atualizado via Redux!'
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_UPDATE_INCREMENT:
      console.log('counterReducerIncrement: ', action)
      return {
        ...state,
        newCounterValue: action.newCounterValue
      };
      case COUNTER_UPDATE_DECREMENT:
        console.log('counterReducerDecrement: ', action)
          return {
            ...state,
            newCounterValue: action.newCounterValue
        };
    default:
      return state;
  }
}