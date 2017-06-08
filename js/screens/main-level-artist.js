import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import levelGenreScreen from './main-level-genre';

let levelArtist = Object.freeze({
  time: {
    minutes: 2,
    seconds: 0
  },
  answers: [
    {
      name: `Пелагея`,
      imgPath: ``
    },
    {
      name: `Краснознаменная дивизия имени моей бабушки`,
      imgPath: ``
    },
    {
      name: `Lorde`,
      imgPath: ``
    }
  ]
});

const template = (level) => `<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${level.time.minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${level.time.seconds}</span>
    </div>
  </svg>

  <div class="main-wrap">
    <div class="main-timer"></div>

    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${[...level.answers].map((answer, i) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}" />
        <label class="main-answer" for="answer-${i}">
          <img class="main-answer-preview" src="${answer.imgPath}">
          ${answer.name}
        </label>
      </div>`).join(``)}
    </form>
  </div>
</section>`;

const levelArtistScreen = getElementFromTemplate(template(levelArtist));

const answersList = levelArtistScreen.querySelector(`.main-list`);
answersList.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer-r`)) {
    showScreen(levelGenreScreen);
  }
});

export default levelArtistScreen;
