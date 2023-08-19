// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import domBuilder from '../pages/domBuilder';
import buttonEvents from '../events/buttonevents';
import '../styles/main.scss';

const init = () => {
  domBuilder();
  buttonEvents();
};

init();
