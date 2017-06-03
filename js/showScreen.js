const appElement = document.querySelector(`.app`);
const mainElement = appElement.querySelector(`.main`);

const showScreen = (screenElement) => appElement.replaceChild(screenElement, mainElement);

export default showScreen;
