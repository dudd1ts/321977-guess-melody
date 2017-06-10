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

export const levelGenre = Object.freeze({
  title: `Выберите инди-рок треки`,
  answers: [
    {
      correct: true,
      filePath: ``,
    },
    {
      correct: false,
      filePath: ``,
    },
    {
      correct: false,
      filePath: ``,
    },
    {
      correct: true,
      filePath: ``,
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

