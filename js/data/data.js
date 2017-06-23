export const initialState = Object.freeze({
  timeLeft: 120,
  questions: 10,
  lives: 3,
  scores: 0,
  rightAnswers: 0,
  elapsedTime: 0,
  previousElapsedTime: 0
});

export const welcome = Object.freeze({
  title: `Правила игры`,
  description: `Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!`
});

export const songs = [
  {
    id: 1,
    genre: `поп`,
    artist: `The Beatles`,
    imgPath: `./img/bands/beatles.jpg`,
    audioPath: `./audio/beatles-yesterday.mp3`,
  },
  {
    id: 2,
    genre: `поп`,
    artist: `Michael Jackson`,
    imgPath: `./img/bands/jackson.jpg`,
    audioPath: `./audio/michael_jackson-thriller.mp3`,
  },
  {
    id: 3,
    genre: `рок`,
    artist: `Imagine Dragons`,
    imgPath: `./img/bands/dragons.jpg`,
    audioPath: `./audio/imagine_dragons-believer.mp3`,
  },
  {
    id: 4,
    genre: `кантри`,
    artist: `Johnny Cash`,
    imgPath: `./img/bands/cash.jpg`,
    audioPath: `./audio/johnny_cash-hey_porter.mp3`,
  },
  {
    id: 5,
    genre: `рэгги`,
    artist: `Bob Marley`,
    imgPath: `./img/bands/marley.jpg`,
    audioPath: `./audio/bob_marley-dont_worry.mp3`,
  },
];

export const resultWin = Object.freeze({
  title: `Вы настоящий меломан!`,
  rightAnswers: 0,
  scores: 0,
  elapsedTime: 0,
  rating: 0
});

export const resultLoss = Object.freeze({
  title: `Вы проиграли`,
  text: `Ничего, вам повезет в следующий раз`,
});

export const statistics = [
  {time: 20, answers: 10},
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7}
];
