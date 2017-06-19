import showScreen from './showScreen';
import welcomeScreen from './screens/main-welcome';
import levelArtistScreen from './screens/main-level-artist';
// import levelGenreScreen from './screens/main-level-genre';
// import resultLossScreen from './main-result-loss';
// import resultWinScreen from './main-result-win';
import showTimer from './screens/main-timer';
import initializeCountdown from './timer';

const appElement = document.querySelector(`.app`);

export const stopGame = () => {
  appElement.removeChild(document.querySelector(`.main-timer`));
  showScreen(welcomeScreen);
};

export const startGame = (state) => {
  showTimer(state.time);
  initializeCountdown(state.time);
  showScreen(levelArtistScreen);
};
