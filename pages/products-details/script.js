const img = localStorage.getItem('img');
const title = localStorage.getItem('title');
const price = localStorage.getItem('price');
const description = localStorage.getItem('description');

const imgElement = document.querySelector('img');
const titleElement = document.querySelector('.selected-card-title');
const priceElement = document.querySelector('.selected-card-price');
const descriptionElement = document.querySelector('.selected-card-description');


imgElement.src = img;
titleElement.innerHTML = title;
priceElement.innerHTML = price;
descriptionElement.innerHTML = description;

localStorage.clear();