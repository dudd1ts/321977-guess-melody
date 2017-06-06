import getElementFromTemplate from './../getElement';
import showScreen from './../showScreen';
import resultLossScreen from './main-result-loss';
import resultWinScreen from './main-result-win';

const levelGenreScreen = getElementFromTemplate(`<section class="main main--level main--level-genre">
  <h2 class="title">Выберите инди-рок треки</h2>
  <form class="genre">
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-1">
      <label class="genre-answer-check" for="a-1"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-2">
      <label class="genre-answer-check" for="a-2"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-3">
      <label class="genre-answer-check" for="a-3"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-4">
      <label class="genre-answer-check" for="a-4"></label>
    </div>

    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>
</section>`);

const answerForm = levelGenreScreen.querySelector(`.genre`);
const sendFormElement = answerForm.querySelector(`.genre-answer-send`);
const answers = [...answerForm.elements.answer];
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
