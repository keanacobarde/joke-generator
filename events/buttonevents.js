import getJoke from '../api/jokeAPI';

const buttonEvents = () => {
  document.querySelector('#jokeBtn').addEventListener('click', () => {
    getJoke().then((response) => {
      console.warn(response.setup, response.delivery);
    });
  });
};

export default buttonEvents;
