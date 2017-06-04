export default (template) => {
  const newElement = document.createElement(`section`);
  newElement.innerHTML = template;

  return newElement.children[0];
};
