import getJoke from '../api/jokeAPI';
import showJokes from '../pages/jokes';

const buttonEvents = () => {
  document.querySelector('#jokeBtn').addEventListener('click', () => {
    getJoke().then((response) => {
      showJokes(response);
    });
  });
};

export default buttonEvents;
