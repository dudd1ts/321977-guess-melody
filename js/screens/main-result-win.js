import getElementFromTemplate from '../getElement';
import {repeatGame} from '../render-screens';

const renderResultWinScreen = (screenData) => {
  const template = (data) => `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
    <h2 class="title">${data.title}</h2>
    <div class="main-stat">За&nbsp;${data.elapsedTime}&nbsp;секунд<br>вы&nbsp;отгадали ${data.rightAnswers}&nbsp;мелодии<br> и набрали ${data.scores} очков.</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.rating}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const resultWinScreen = getElementFromTemplate(template(screenData));

  const repeatGameHandler = () => {
    repeatGame();
  };

  const replayElement = resultWinScreen.querySelector(`.main-replay`);
  replayElement.addEventListener(`click`, repeatGameHandler);

  return resultWinScreen;
};

export default renderResultWinScreen;
