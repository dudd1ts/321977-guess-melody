import getElementFromTemplate from '../getElement';
import {resultLoss as screenData} from '../data/data';
import {initialState} from '../data/data';
import {repeatGame} from '../controller';

const renderResultLossScreen = () => {
  const template = (data) => `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
    <h2 class="title">${data.title}</h2>
    <div class="main-stat">${data.text}</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const resultLossScreen = getElementFromTemplate(template(screenData));

  const repeatGameHandler = () => {
    repeatGame(initialState);
  };

  const replayElement = resultLossScreen.querySelector(`.main-replay`);
  replayElement.addEventListener(`click`, repeatGameHandler);

  return resultLossScreen;
};

export default renderResultLossScreen;
