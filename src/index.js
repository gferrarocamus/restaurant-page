import './styles.css';
import homepage from './tabHome';
import menu from './tabMenu';
import contact from './tabContact';
import pageLoad from './pageLoad';

const setActive = (e) => {
  const tabs = document.getElementsByClassName('tab');
  [...tabs].forEach((tab) => {
    tab.classList.remove('active');
  });
  const tab = e.target;
  tab.classList.add('active');
  pageLoad(getActiveTab(e.target.id));
};

const getActiveTab = (id) => {
  if (id === 'contact') {
    return contact();
  } else if (id === 'menu') {
    return menu();
  } else {
    return homepage();
  }
};

const initNavbar = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  [home, menu, contact].forEach((tab) => {
    tab.addEventListener('click', setActive, false);
  });
};

initNavbar();
pageLoad(getActiveTab('home'));
