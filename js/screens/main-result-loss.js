import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import welcomeScreen from './main-welcome';

const resultLossScreen = getElementFromTemplate(`<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы проиграли</h2>
  <div class="main-stat">Ничего, вам повезет в следующий раз</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`);

const changeScreen = () => {
  showScreen(welcomeScreen);
};

const replayElement = resultLossScreen.querySelector(`.main-replay`);
replayElement.addEventListener(`click`, changeScreen);

export default resultLossScreen;
