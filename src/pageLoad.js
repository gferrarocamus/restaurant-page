const setActive = (e) => {
  const tabs = document.getElementsByClassName('tab');
  [...tabs].forEach((tab) => {
    tab.classList.remove('active');
  })
  const tab = e.target.parentElement;
  console.log(tab);
  tab.classList.add('active');
}

const pageLoad = (content) => {
  const div = document.getElementById('content');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  [home, menu, contact].forEach((tab) => {
    tab.addEventListener('click', setActive, false);
  })
  div.appendChild(content);
}

export { pageLoad as default }