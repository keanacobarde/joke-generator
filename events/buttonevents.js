import getJoke from '../api/jokeAPI';
import { showDelivery, showJokes } from '../pages/jokes';
import { getJokeBtn, getPunchilneBtn, getNewJokeBtn } from '../components/buttons';
import clearDom from '../utils/clearDom';
import domBuilder from '../pages/domBuilder';

const buttonEvents = () => {
  getJoke().then((response) => {
    document.querySelector('#app').addEventListener('click', (e) => {
      if (e.target.innerText === 'Get A Joke') {
        showJokes(response);
        getPunchilneBtn();
      }
    });
    document.querySelector('#app').addEventListener('click', (event) => {
      if (event.target.innerText === 'Get A Punchline') {
        showDelivery(response);
        getJokeBtn();
      }
    });
  });
  document.querySelector('#reset-section').addEventListener('click', (deleteEvent) => {
    if (deleteEvent.target.innerText === 'Reset') {
      clearDom();
      domBuilder();
      getJokeBtn();
      getNewJokeBtn();
      buttonEvents();
    }
  });
};
export default buttonEvents;
