import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import levelGenreScreen from './main-level-genre';
import {time} from '../data';
import {levelArtist as screenData} from '../data';
import '../animate.js';
import '../player.js';

const answerTemplate = (data, id) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="val-${id + 1}" />
        <label class="main-answer" for="answer-${id + 1}">
          <img class="main-answer-preview" src="${data.imgPath}">
          ${data.name}
        </label>
      </div>`;

const timerTemplate = (state) => `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${state.minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${state.seconds}</span>
    </div>
  </svg>`;

const template = (data) => `<section class="main main--level main--level-artist">
  ${timerTemplate(time)}
  <div class="main-wrap">
    <div class="main-timer"></div>

    <h2 class="title main-title">${data.title}</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${data.answers.map(answerTemplate).join(``)}
    </form>
  </div>
</section>`;

const levelArtistScreen = getElementFromTemplate(template(screenData));

const playerWrapper = levelArtistScreen.querySelector(`.player-wrapper`);
window.initializePlayer(playerWrapper, screenData.audioPath);

const answersList = levelArtistScreen.querySelector(`.main-list`);
answersList.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer-r`)) {
    showScreen(levelGenreScreen);
  }
});

export default levelArtistScreen;
