const menu = () => {
  const element = document.createElement('div');
  element.classList.add('header');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const elements = [
    [h1, "Industrial Café"],
    [h3, "Lorem ipsum dolor sit, amet consectetur adipisicing elit."],
    [p1, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, reiciendis, fuga eligendi consequuntur totam doloribus quaerat natus dolor officia animi nihil sunt cumque, perferendis dicta perspiciatis dolore non maxime tempora."],
    [p2, "📍 Heden, Gothenburg, Sweden"],
  ];
  elements.forEach((item) => {
    item[0].innerHTML = item[1];
  });
  
  const img = new Image();
  img.src = 'https://images.unsplash.com/photo-1513003604845-103fe8aaf4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  
  const appendToElement = [h1, h3, img, p1, p2];
  appendToElement.forEach((item) => {
    element.appendChild(item);
  });
  return element;
}

export default menu