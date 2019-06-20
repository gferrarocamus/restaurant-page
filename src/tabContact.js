const contact = () => {
  const element = document.createElement('div');
  element.classList.add('contact');
  const h2 = document.createElement('h2');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const elements = [
    [h2, "Contact Us"],
    [p1, "📞 +46 123 45-6789"],
    [p2, "📧 info@industrialcafe.com"],
    [p3, "📷 @industrialcafe"],
  ];
  elements.forEach((item) => {
    item[0].innerHTML = item[1];
  });
  
  const appendToElement = [h2, p1, p2, p3];
  appendToElement.forEach((item) => {
    element.appendChild(item);
  });
  return element;
}

export default contact