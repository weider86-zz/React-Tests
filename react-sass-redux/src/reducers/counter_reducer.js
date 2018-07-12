import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  titleValueRedux: 'Redux App',
  newValue: 'Estado inicial Redux',
  newValue2: 'Estado inicial Redux2'
};

export const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }

}