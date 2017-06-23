import getElementFromTemplate from '../getElement';
import {songs} from '../data/data';
import initializePlayer from '../player';
import {answerHandler, getSongs} from '../controller';

const renderLevelArtistScreen = () => {
  const answerTemplate = (data) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${data.id}" name="answer" value="val-${data.id}" />
        <label class="main-answer" for="answer-${data.id}">
          <img class="main-answer-preview" src="${data.imgPath}">
          ${data.artist}
        </label>
      </div>`;

  const template = (data) => `<section class="main main--level main--level-artist">
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${data.map(answerTemplate).join(``)}
    </form>
  </div>
  </section>`;

  const currentSongs = getSongs(songs, 3);
  const correctSong = currentSongs[Math.trunc(Math.random() * currentSongs.length)];

  const levelArtistScreen = getElementFromTemplate(template(currentSongs));

  const playerWrapper = levelArtistScreen.querySelector(`.player-wrapper`);
  initializePlayer(playerWrapper, correctSong.audioPath);

  const answersList = levelArtistScreen.querySelector(`.main-list`);
  answersList.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`main-answer-r`)) {
      let isCorrectAnswer = (event.target.id === `answer-${correctSong.id}`);
      answerHandler(isCorrectAnswer);
    }
  });

  return levelArtistScreen;
};

export default renderLevelArtistScreen;
