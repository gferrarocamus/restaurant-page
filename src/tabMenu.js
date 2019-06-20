const menu = () => {
  const element = document.createElement('div');
  element.classList.add('menu');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const elements = [
    [h2, "Menu"],
    [h3, "Take your pick!"],
    [p1, "Our Specialty<br>$9.99"],
    [p2, "Our Raw Specialty<br>$10.99"],
    [p3, "Our Seasonal Specialty<br>$12.99"],
  ];
  elements.forEach((item) => {
    item[0].innerHTML = item[1];
  });
  
  const img1 = new Image();
  const img2 = new Image();
  const img3 = new Image();
  img1.src = 'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80';
  img2.src = 'https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  img3.src = 'https://images.unsplash.com/photo-1543363136-3f2d17e6d6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80';
  
  const appendToElement = [h2, h3, img1, p1, img2, p2, img3, p3];
  appendToElement.forEach((item) => {
    element.appendChild(item);
  });
  return element;
}

export default menu