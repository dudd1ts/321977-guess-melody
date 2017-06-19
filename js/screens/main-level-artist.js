import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import levelGenreScreen from './main-level-genre';
import {levelArtist as screenData} from '../data';
import initializePlayer from '../player';

const answerTemplate = (data, id) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="val-${id + 1}" />
        <label class="main-answer" for="answer-${id + 1}">
          <img class="main-answer-preview" src="${data.imgPath}">
          ${data.name}
        </label>
      </div>`;

const template = (data) => `<section class="main main--level main--level-artist">
  <div class="main-wrap">
    <h2 class="title main-title">${data.title}</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${data.answers.map(answerTemplate).join(``)}
    </form>
  </div>
</section>`;

const levelArtistScreen = getElementFromTemplate(template(screenData));

const playerWrapper = levelArtistScreen.querySelector(`.player-wrapper`);
initializePlayer(playerWrapper, screenData.audioPath);

const answersList = levelArtistScreen.querySelector(`.main-list`);
answersList.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer-r`)) {
    showScreen(levelGenreScreen);
  }
});

export default levelArtistScreen;
