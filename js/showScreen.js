const appElement = document.querySelector(`.app`);

const showScreen = (screenElement) => {
  appElement.replaceChild(screenElement, appElement.querySelector(`.main`));
};

export default showScreen;
