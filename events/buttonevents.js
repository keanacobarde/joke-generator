import getJoke from '../api/jokeAPI';
import { showDelivery, showJokes } from '../pages/jokes';
import { getPunchilneBtn, getNewJokeBtn } from '../components/buttons';
// import clearDom from '../utils/clearDom';

const buttonEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    getJoke().then((response) => {
      if (e.target.innerText === 'Get A Joke') {
        showJokes(response);
        getPunchilneBtn();
      }
      if (e.target.innerText === 'Get A Punchline') {
        showDelivery(response);
        getNewJokeBtn();
      }
      if (e.target.innerText === 'Get A Joke') {
        buttonEvents();
      }
    });
  });
};

export default buttonEvents;
