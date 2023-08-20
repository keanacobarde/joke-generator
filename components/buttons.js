import renderToDom from '../utils/renderToDom';

const getJokeBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokeBtn"> Get A Joke </button>';

  renderToDom('#joke-btn', domString);
};

const getPunchilneBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokePunchlineBtn"> Get A Punchline </button>';

  renderToDom('#joke-btn', domString);
};

const getNewJokeBtn = () => {
  const domString = '<button type="button" class="btn btn-danger" id="jokeBtn" style="margin:0.5rem;"> Reset </button>';

  renderToDom('#reset-section', domString);
};

export {
  getJokeBtn,
  getPunchilneBtn,
  getNewJokeBtn
};
