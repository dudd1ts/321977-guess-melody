import getElementFromTemplate from './getElement';
import showScreen from './showScreen';
import welcomeScreen from './main-welcome';

const resultWinScreen = getElementFromTemplate(`<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`);

const replayElement = resultWinScreen.querySelector(`.main-replay`);
replayElement.addEventListener(`click`, showScreen(welcomeScreen));

export default resultWinScreen;
