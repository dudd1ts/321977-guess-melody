import getElementFromTemplate from '../getElement';
import {songs} from '../data/data';
import initializePlayer from '../player';
import {answerHandler, getSongs} from '../controller';

const renderLevelGenreScreen = () => {
  const answerTemplate = (data) => `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${data.id}" id="a-${data.id}">
        <label class="genre-answer-check" for="a-${data.id}"></label>
      </div>`;

  const template = (answers, genre) => `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите ${genre} трэки</h2>
    <form class="genre">
      ${answers.map(answerTemplate).join(``)}
  
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

  const currentSongs = getSongs(songs, 4);
  const correctGenre = currentSongs[Math.trunc(Math.random() * currentSongs.length)].genre;
  let correctIDs = new Set();
  currentSongs.map((song) => {
    if (song.genre === correctGenre) {
      correctIDs.add(song.id);
    }
  });

  const levelGenreScreen = getElementFromTemplate(template(currentSongs, correctGenre));

  const answerForm = levelGenreScreen.querySelector(`.genre`);
  const sendFormElement = answerForm.querySelector(`.genre-answer-send`);
  const playerWrappers = [...answerForm.querySelectorAll(`.player-wrapper`)];
  playerWrappers.map((wrapper, id) => {
    initializePlayer(wrapper, currentSongs[id].audioPath);
  });

  const answers = [...answerForm.querySelectorAll(`[name="answer"]`)];
  sendFormElement.disabled = true;

  for (let answer of answers) {
    answer.addEventListener(`change`, (() => {
      let isSomeChecked = answers.some((checkbox) => checkbox.checked);
      sendFormElement.disabled = !isSomeChecked;
    }));
  }

  // Чекбокс отмечен правильно, если его id совпадает с id любой из песен нужного жанра
  let isCorrectCheckbox = (checkbox) => [...correctIDs].some((id) => checkbox.id === `a-${id}`);

  answerForm.addEventListener(`submit`, (event) => {
    event.preventDefault();

    const checkedAnswers = answers.filter((answer) => answer.checked === true);
    // Ответ верен если выполняются 2 услоия:
    // - количество отммеченных чекбоксов совпадает с количеством песен нужного жанра;
    // - отмечены ТОЛЬКО правильные чекбоксы
    const isCorrectAnswer = () => {
      return (checkedAnswers.length === correctIDs.size) && checkedAnswers.every((answer) => isCorrectCheckbox(answer));
    };
    checkedAnswers.forEach((checkbox) => {
      checkbox.checked = false;
    });
    sendFormElement.disabled = true;

    answerHandler(isCorrectAnswer());
  });

  return levelGenreScreen;
};

export default renderLevelGenreScreen;
