function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');


const hendalClick = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

btnColor.addEventListener("click", hendalClick);
