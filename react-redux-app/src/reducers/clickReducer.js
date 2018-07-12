import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
import { CLICK_UPDATE_VALUE2 } from '../actions/actionTypes';

const initialState = {
  titleValueRedux: 'Redux App',
  newValue: 'Estado inicial Redux',
  newValue2: 'Estado inicial Redux2'
};

export const clickReducer = (state = initialState, action) => {

  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    case CLICK_UPDATE_VALUE2:
      return {
        ...state,
        newValue2: action.newValue2
      };
    default:
      return state;
  }

}