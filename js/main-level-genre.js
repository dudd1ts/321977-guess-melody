import getElementFromTemplate from './getElement';
import showScreen from './showScreen';
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

const sendAnswerElement = levelGenreScreen.querySelector(`.genre-answer-send`);
const resultScreens = [
  resultLossScreen,
  resultWinScreen
];
sendAnswerElement.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer`)) {
    showScreen(resultScreens[Math.trunc(Math.random() * 2)]);
  }
});

export default levelGenreScreen;
