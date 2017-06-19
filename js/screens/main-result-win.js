import getElementFromTemplate from '../getElement';
import {resultWin as screenData} from '../data';
import {initialState as gameData} from '../data';
import {stopGame} from '../controller';

const template = (data) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${data.title}</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${data.amountAnswers}&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.rating}%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;

const resultWinScreen = getElementFromTemplate(template(screenData));

const repeatGameHandler = () => {
  stopGame(gameData);
};

const replayElement = resultWinScreen.querySelector(`.main-replay`);
replayElement.addEventListener(`click`, repeatGameHandler);

export default resultWinScreen;
