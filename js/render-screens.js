import showScreen from './showScreen';
import welcomeScreen from './screens/main-welcome';
import renderLevelArtistScreen from './screens/main-level-artist';
import renderLevelGenreScreen from './screens/main-level-genre';
import renderResultLossScreen from './screens/main-result-loss';
import renderResultWinScreen from './screens/main-result-win';
import {initialResultWinData} from './data/data';
import showTimer from './screens/main-timer';
import initializeCountdown from './timer';
import {statistics} from './data/data';
import {getState, getStateProperty, changeState, resetState} from './state-controller';

export const repeatGame = () => {
  showScreen(welcomeScreen);
};

const removeTimer = () => {
  const appElement = document.querySelector(`.app`);
  appElement.removeChild(document.querySelector(`.main-timer`));
};

const updateElapsedTime = (time) => {
  changeState({elapsedTime: time});
};

export const startGame = () => {
  resetState();
  const timeLeft = getStateProperty(`timeLeft`);
  showTimer(timeLeft);
  initializeCountdown(timeLeft, updateElapsedTime, stopGameLoss);
  showScreen(renderLevelArtistScreen());
};

export const stopGameWin = () => {
  removeTimer();
  const state = getState();
  const resultWinData = Object.assign({}, initialResultWinData);
  resultWinData.rightAnswers = state.rightAnswers;
  resultWinData.scores = state.scores;
  resultWinData.elapsedTime = state.elapsedTime;

  const gameStatistic = {
    time: resultWinData.elapsedTime,
    answers: resultWinData.rightAnswers
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
  removeTimer();
  showScreen(renderResultLossScreen());
};

const showNextGameScreen = () => {
  const gameScreens = [
    renderLevelArtistScreen(),
    renderLevelGenreScreen()
  ];
  const nextScreen = gameScreens[Math.trunc(Math.random() * gameScreens.length)];
  showScreen(nextScreen);
};

export const chooseNextScreen = (screenType) => {
  switch (screenType) {
    case `gameLevel`: showNextGameScreen(); break;
    case `gameWin`: stopGameWin(); break;
    case `gameLoss`: stopGameLoss(); break;
  }
};

