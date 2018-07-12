import { CLICK_UPDATE_VALUE } from './actionTypes';
import { CLICK_UPDATE_VALUE2 } from './actionTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickButton2 = value => ({
  type: CLICK_UPDATE_VALUE2,
  newValue2: value
});