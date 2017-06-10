import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import levelArtistScreen from './main-level-artist';
import {welcome as screenData} from '../data';

const template = (data) => `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">${data.title}</h2>
  <p class="text main-text">${data.description}</p>
</section>`;

const welcomeScreen = getElementFromTemplate(template(screenData));

const changeScreenHandler = () => {
  showScreen(levelArtistScreen);
};

const startGameElement = welcomeScreen.querySelector(`.main-play`);
startGameElement.addEventListener(`click`, changeScreenHandler);

export default welcomeScreen;
