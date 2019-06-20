import './styles.css';
import homepage from './tabHome';
import menu from './tabMenu';
import contact from './tabContact';
import pageLoad from './pageLoad';

let activeTab = homepage();

const setActive = (e) => {
  const tabs = document.getElementsByClassName('tab');
  [...tabs].forEach((tab) => {
    tab.classList.remove('active');
  });
  const tab = e.target;
  tab.classList.add('active');
  setActiveTab(e.target.id);
  pageLoad(activeTab);
};

const setActiveTab = (id) => {
  if (id === 'contact') {
    activeTab = contact();
  } else if (id === 'menu') {
    activeTab = menu();
  } else {
    activeTab = homepage();
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
pageLoad(activeTab);
