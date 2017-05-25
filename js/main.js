(function () {
  const keyCodes = {
    left: 37,
    right: 39
  };

  const appElement = document.querySelector(`.app`);
  const mainElement = appElement.querySelector(`.main`);
  const templates = document.querySelector(`#templates`).content;
  const screens = [
    templates.querySelector(`.main--welcome`),
    templates.querySelector(`.main--level-genre`),
    templates.querySelector(`.main--level-artist`),
    templates.querySelectorAll(`.main--result`)[0],
    templates.querySelectorAll(`.main--result`)[1]
  ];

  const firstScreen = 0;
  let currentScreen = firstScreen;

  const showScreen = (screenNumber) => {
    mainElement.innerHTML = ``;
    mainElement.appendChild(screens[screenNumber]);
  };
  showScreen(currentScreen);

  document.addEventListener(`keydown`, (event) => {
    if (event.keyCode === keyCodes.left && event.altKey) {
      if (currentScreen > 0) {
        currentScreen--;
        showScreen(currentScreen);
      }
    }
    if (event.keyCode === keyCodes.right && event.altKey) {
      if (currentScreen < (screens.length - 1)) {
        currentScreen++;
        showScreen(currentScreen);
      }
    }
  });
})();
