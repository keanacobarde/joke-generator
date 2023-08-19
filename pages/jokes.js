import renderToDom from '../utils/renderToDom';

const showJokes = (response) => {
  const setup = `<p>${response.setup}</p>`;
  renderToDom('#joke-section', setup);
};

export default showJokes;
