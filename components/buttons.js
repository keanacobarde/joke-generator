import renderToDom from '../utils/renderToDom';

const getJokeBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokeBtn"> Get A Joke </button>';

  renderToDom('#joke-btn', domString);
};

const getPunchilneBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokeBtn"> Get A Punchline </button>';

  renderToDom('#joke-btn', domString);
};

const getNewJokeBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokeBtn"> Get A New Joke </button>';

  renderToDom('#joke-btn', domString);
};

export {
  getJokeBtn,
  getPunchilneBtn,
  getNewJokeBtn
};
