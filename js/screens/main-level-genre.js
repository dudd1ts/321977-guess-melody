import getElementFromTemplate from '../getElement';
import showScreen from '../showScreen';
import resultLossScreen from './main-result-loss';
import resultWinScreen from './main-result-win';
import {levelGenre as screenData} from '../data';
import '../animate.js';
import '../player.js';

const answerTemplate = (data, id) => `<div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-${id + 1} + 1" id="a-${id + 1}">
      <label class="genre-answer-check" for="a-${id + 1}"></label>
    </div>`;

const template = (data) => `<section class="main main--level main--level-genre">
  <h2 class="title">${data.title}</h2>
  <form class="genre">
    ${data.answers.map(answerTemplate).join(``)}

    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>
</section>`;

const levelGenreScreen = getElementFromTemplate(template(screenData));

const answerForm = levelGenreScreen.querySelector(`.genre`);
const sendFormElement = answerForm.querySelector(`.genre-answer-send`);
const playerWrappers = [...answerForm.querySelectorAll(`.player-wrapper`)];
playerWrappers.map((wrapper, id) => {
  window.initializePlayer(wrapper, screenData.answers[id].audioPath);
});

const answers = [...answerForm.querySelectorAll(`[name="answer"]`)];
const resultScreens = [
  resultLossScreen,
  resultWinScreen
];
sendFormElement.disabled = true;

for (let answer of answers) {
  answer.addEventListener(`change`, (() => {
    let isChecked = answers.some((checkbox) => checkbox.checked);
    if (isChecked) {
      sendFormElement.disabled = false;
    } else {
      sendFormElement.disabled = true;
    }
  }));
}

answerForm.addEventListener(`submit`, (event) => {
  event.preventDefault();

  answers.forEach((checkbox) => {
    checkbox.checked = false;
  });
  sendFormElement.disabled = true;

  showScreen(resultScreens[Math.trunc(Math.random() * 2)]);
});

export default levelGenreScreen;
