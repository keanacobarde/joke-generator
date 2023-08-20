import renderToDom from '../utils/renderToDom';

const showJokes = (response) => {
  const setup = `<p>${response.setup}</p>`;
  renderToDom('#joke-section', setup);
};

const showDelivery = (response) => {
  const delivery = `<p>${response.delivery}</p>`;
  renderToDom('#joke-section', delivery);
};

export { showJokes, showDelivery };
