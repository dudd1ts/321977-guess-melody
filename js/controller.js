import {getState, changeState} from './state-controller';

export const answerHandler = (isCorrect) => {
  let state = getState();

  if (isCorrect) {
    state.rightAnswers++;
    // +2 очка за быстрый ответ
    if ((state.elapsedTime - state.previousElapsedTime) < 10) {
      state.scores += 2;
    } else {
      state.scores++;
    }
  } else {
    state.lives--;
  }
  state.previousElapsedTime = state.elapsedTime;
  state.questions--;

  if ((state.questions > 0) && (state.lives > 0)) {
    state.screenType = `gameLevel`;
  } else if (state.lives > 0) {
    state.screenType = `gameWin`;
  } else {
    state.screenType = `gameLoss`;
  }
  changeState(state);

  return state.screenType;
};

export const getSongs = (store, amount) => {
  let songsSet = new Set();
  do {
    songsSet.add(store[Math.trunc(Math.random() * store.length)]);
  } while (songsSet.size < amount);

  return [...songsSet];
};
