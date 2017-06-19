import getElementFromTemplate from '../getElement';
import {resultLoss as screenData} from '../data';
import {initialState as gameData} from '../data';
import {stopGame} from '../controller';

const template = (data) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${data.title}</h2>
  <div class="main-stat">${data.text}</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;

const resultLossScreen = getElementFromTemplate(template(screenData));

const repeatGameHandler = () => {
  stopGame(gameData);
};

const replayElement = resultLossScreen.querySelector(`.main-replay`);
replayElement.addEventListener(`click`, repeatGameHandler);

export default resultLossScreen;
