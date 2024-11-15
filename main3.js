//team4
const mainTitle4 = document.querySelector('#title4');
let curValue4 = 0;

const btnDecrement4 = document.querySelector('#decrement4');

const btnIncrement4 = document.querySelector('#increment4');

btnIncrement4.addEventListener('click', () => {
  curValue4 = curValue4+10;
  mainTitle4.textContent = curValue4;
});

btnDecrement4.addEventListener('click', () => {
  curValue4 = curValue4-10;
  mainTitle4.textContent = curValue4;
});


//team5
const mainTitle5 = document.querySelector('#title5');
let curValue5 = 0;

const btnDecrement5 = document.querySelector('#decrement5');
const btnIncrement5 = document.querySelector('#increment5');

btnIncrement5.addEventListener('click', () => {
  curValue5 = curValue5+10;
  mainTitle5.textContent = curValue5;
});

btnDecrement5.addEventListener('click', () => {
  curValue5 = curValue5-10;
  mainTitle5.textContent = curValue5;
});
