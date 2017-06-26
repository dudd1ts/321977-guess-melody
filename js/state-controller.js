import {initialState} from './data/data.js';

let state = {};

export const getState = () => state;

export const getStateProperty = (propertyName) => {
  return state[propertyName];
};

export const changeState = (newState) => {
  return Object.assign(state, newState);
};

export const resetState = () => {
  return Object.assign(state, initialState);
};
