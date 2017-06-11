export const time = Object.freeze({
  minutes: 2,
  seconds: 0
});

export const welcome = Object.freeze({
  title: `Правила игры`,
  description: `Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!`
});

export const levelArtist = Object.freeze({
  title: `Кто исполняет эту песню?`,
  audioPath: `./audio/back_and_forth.mp3`,
  answers: [
    {
      name: `Пелагея`,
      imgPath: `./img/bands/pelageya.jpg`
    },
    {
      name: `Краснознаменная дивизия имени моей бабушки`,
      imgPath: `./img/bands/grandmother.png`
    },
    {
      name: `Lorde`,
      imgPath: `./img/bands/lorde.jpg`
    }
  ]
});

export const levelGenre = Object.freeze({
  title: `Выберите инди-рок треки`,
  answers: [
    {
      correct: true,
      audioPath: `./audio/back_and_forth.mp3`,
    },
    {
      correct: false,
      audioPath: `./audio/dub_spirit.mp3`,
    },
    {
      correct: false,
      audioPath: `./audio/how_it_began.mp3`,
    },
    {
      correct: false,
      audioPath: `./audio/waltz_of_the_flowers.mp3`,
    }
  ]
});

export const resultWin = Object.freeze({
  title: `Вы настоящий меломан!`,
  amountAnswers: 4,
  rating: 80
});

export const resultLoss = Object.freeze({
  title: `Вы проиграли`,
  text: `Ничего, вам повезет в следующий раз`,
});

