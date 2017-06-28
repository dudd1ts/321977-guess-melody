import {initialState} from './data/data.js';

const state = {};

export const getState = () => Object.assign({}, state);

export const getStateProperty = (propertyName) => {
  return state[propertyName];
};

export const changeState = (newState) => {
  return Object.assign(state, newState);
};

export const resetState = () => {
  return Object.assign(state, initialState);
};
