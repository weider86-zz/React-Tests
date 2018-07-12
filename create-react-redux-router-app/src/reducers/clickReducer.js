import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newClickValue: 'Click atualizado via Redux!'
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newClickValue: action.newClickValue
      };
    default:
      return state;
  }
}