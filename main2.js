//team2
const mainTitle2 = document.querySelector('#title2');
let curValue2 = 0;

const btnDecrement2 = document.querySelector('#decrement2');
const btnReset2 = document.querySelector('#reset2');
const btnIncrement2 = document.querySelector('#increment2');

btnIncrement2.addEventListener('click', () => {
  curValue2 = curValue2+10;
  mainTitle2.textContent = curValue2;
});

btnDecrement2.addEventListener('click', () => {
  curValue2 = curValue2-10;
  mainTitle2.textContent = curValue2;
});


//team3
const mainTitle3 = document.querySelector('#title3');
let curValue3 = 0;

const btnDecrement3 = document.querySelector('#decrement3');
const btnReset3 = document.querySelector('#reset3');
const btnIncrement3 = document.querySelector('#increment3');

btnIncrement3.addEventListener('click', () => {
  curValue3 = curValue3+10;
  mainTitle3.textContent = curValue3;
});

btnDecrement3.addEventListener('click', () => {
  curValue3 = curValue3-10;
  mainTitle3.textContent = curValue3;
});

btnReset3.addEventListener('click', () => {
  curValue3 = 0;
  mainTitle3.textContent = curValue3;
});


