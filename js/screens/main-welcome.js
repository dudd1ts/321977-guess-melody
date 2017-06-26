import getElementFromTemplate from '../getElement';
import {welcome as screenData} from '../data/data';
import {startGame} from '../render-screens';

const template = (data) => `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">${data.title}</h2>
  <p class="text main-text">${data.description}</p>
</section>`;

const welcomeScreen = getElementFromTemplate(template(screenData));

const startGameHandler = () => {
  startGame();
};

const startGameElement = welcomeScreen.querySelector(`.main-play`);
startGameElement.addEventListener(`click`, startGameHandler);

export default welcomeScreen;
