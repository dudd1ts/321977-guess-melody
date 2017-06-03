const getElementFromTemplate = (template) => {
  const newElement = document.createElement(`section`);
  newElement.innerHTML = template;

  return newElement.children[0]; // .cloneNode(true) ?
};

export default getElementFromTemplate;
