//team1
const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue = curValue+10;
  mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
  curValue = curValue-10;
  mainTitle.textContent = curValue;
});

