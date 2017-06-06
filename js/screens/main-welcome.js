import getElementFromTemplate from './../getElement';
import showScreen from './../showScreen';
import levelArtistScreen from './main-level-artist';

const welcomeScreen = getElementFromTemplate(`<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!
  </p>
</section>`);

const changeScreen = () => {
  showScreen(levelArtistScreen);
};

const startGameElement = welcomeScreen.querySelector(`.main-play`);
startGameElement.addEventListener(`click`, changeScreen);

export default welcomeScreen;
