import { CLICK_UPDATE_VALUE } from './actionTypes';
import { COUNTER_UPDATE_INCREMENT } from './actionTypes';
import { COUNTER_UPDATE_DECREMENT } from './actionTypes';
import { HOME_UPDATE_VALUE } from './actionTypes';

export const homeButtonAction = value => {
  console.log('action', value)
  return ({
  type: HOME_UPDATE_VALUE,
  newValueHome: value
})};

export const clickButton = value => {
  console.log('action', value)
  return ({
    type: CLICK_UPDATE_VALUE,
    newClickValue: value
})};

export const counterButtonIncrementAction = value => {
  console.log('action', value)
  return ({
  type: COUNTER_UPDATE_INCREMENT,
  newCounterValue: value
})};

export const counterButtonDecrementAction = value => {
  console.log('action', value)
  return ({
  type: COUNTER_UPDATE_DECREMENT,
  newCounterValue: value
})};