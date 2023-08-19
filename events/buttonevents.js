import getJoke from '../api/jokeAPI';

const buttonEvents = () => {
  document.querySelector('#jokeBtn').addEventListener('click', () => {
    getJoke().then(console.warn);
  });
};

export default buttonEvents;
