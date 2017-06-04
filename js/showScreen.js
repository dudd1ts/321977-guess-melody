const appElement = document.querySelector(`.app`);
const mainElement = appElement.querySelector(`.main`);

const showScreen = (screenElement) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screenElement);
};

export default showScreen;
