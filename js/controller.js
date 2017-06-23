import showScreen from './showScreen';
import welcomeScreen from './screens/main-welcome';
import renderLevelArtistScreen from './screens/main-level-artist';
import renderLevelGenreScreen from './screens/main-level-genre';
import renderResultLossScreen from './screens/main-result-loss';
import renderResultWinScreen from './screens/main-result-win';
import showTimer from './screens/main-timer';
import initializeCountdown from './timer';
import {initialState, statistics} from './data/data';
import {resultWin} from './data/data';

let currentState = {};
let resultWinData = {};

const appElement = document.querySelector(`.app`);

export const repeatGame = () => {
  showScreen(welcomeScreen);
};

const updateElapsedTime = (time) => {
  currentState.elapsedTime = time;
};

export const startGame = () => {
  Object.assign(currentState, initialState);
  showTimer(currentState.timeLeft);
  initializeCountdown(currentState.timeLeft, updateElapsedTime, stopGameLoss);
  showScreen(renderLevelArtistScreen());
};

export const stopGameWin = () => {
  appElement.removeChild(document.querySelector(`.main-timer`));

  Object.assign(resultWinData, resultWin);
  resultWinData.rightAnswers = currentState.rightAnswers;
  resultWinData.scores = currentState.scores;
  resultWinData.elapsedTime = currentState.elapsedTime;

  const gameStatistic = {
    time: currentState.elapsedTime,
    answers: currentState.rightAnswers
  };
  const newStatistics = statistics.slice();
  newStatistics.push(gameStatistic);
  newStatistics.sort(function (a, b) {
    return b.answers - a.answers || a.time - b.time;
  });
  resultWinData.rating = Math.floor(((newStatistics.length - (newStatistics.indexOf(gameStatistic) + 1)) / newStatistics.length) * 100);

  showScreen(renderResultWinScreen(resultWinData));
};

export const stopGameLoss = () => {
  appElement.removeChild(document.querySelector(`.main-timer`));

  showScreen(renderResultLossScreen());
};

const showNextGameScreen = () => {
  let gameScreens = [
    renderLevelArtistScreen(),
    renderLevelGenreScreen()
  ];
  let nextScreen = gameScreens[Math.trunc(Math.random() * gameScreens.length)];
  showScreen(nextScreen);
};

export const answerHandler = (isCorrect) => {
  if (isCorrect) {
    currentState.rightAnswers++;
    // +2 очка за быстрый ответ
    if ((currentState.elapsedTime - currentState.previousElapsedTime) < 10) {
      currentState.scores += 2;
    } else {
      currentState.scores++;
    }
  } else {
    currentState.lives--;
  }
  currentState.previousElapsedTime = currentState.elapsedTime;
  currentState.questions--;
  if ((currentState.questions > 0) && (currentState.lives > 0)) {
    showNextGameScreen();
  } else if (currentState.lives > 0) {
    stopGameWin();
  } else {
    stopGameLoss();
  }
};

export const getSongs = (store, amount) => {
  let songsSet = new Set();
  do {
    songsSet.add(store[Math.trunc(Math.random() * store.length)]);
  } while (songsSet.size < amount);

  return [...songsSet];
};
