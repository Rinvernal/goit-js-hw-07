function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

function Boxes(amount) {
  boxes.innerHTML = '';

  let size = 30;

  const elem = [];

  for (let i = 0; i < amount; i++) {
    const div = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    elem.push(div);
    size += 10;
  }
  boxes.innerHTML = elem.join('');
}

create.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    Boxes(amount);
    inputEl.value = ''; 
  } else {
    alert('Введіть число від 1 до 100!');
  }
});

destroy.addEventListener('click', () => {
  boxes.innerHTML = ''; 
});