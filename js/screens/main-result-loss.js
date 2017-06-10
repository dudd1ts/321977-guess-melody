import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import welcomeScreen from './main-welcome';
import {resultLoss as screenData} from '../data';

const template = (data) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${data.title}</h2>
  <div class="main-stat">${data.text}</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;

const resultLossScreen = getElementFromTemplate(template(screenData));

const changeScreen = () => {
  showScreen(welcomeScreen);
};

const replayElement = resultLossScreen.querySelector(`.main-replay`);
replayElement.addEventListener(`click`, changeScreen);

export default resultLossScreen;
