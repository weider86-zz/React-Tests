import { HOME_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newHomeValue: 'Home atualizado via Redux!'
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_UPDATE_VALUE:
    console.log('homeReducer: ', action)
      return {
        ...state,
        newHomeValue: action.newHomeValue
      };
    default:
      return state;
  }
}