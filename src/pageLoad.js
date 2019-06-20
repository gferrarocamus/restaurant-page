const pageLoad = (content) => {
  const div = document.getElementById('content');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  div.appendChild(content);
};

export { pageLoad as default };
