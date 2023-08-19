const domBuilder = () => {
  const domString = '<button type="button" class="btn btn-info" id="jokeBtn"> Get A Joke </button>';
  document.querySelector('#app').innerHTML = domString;
};

export default domBuilder;
