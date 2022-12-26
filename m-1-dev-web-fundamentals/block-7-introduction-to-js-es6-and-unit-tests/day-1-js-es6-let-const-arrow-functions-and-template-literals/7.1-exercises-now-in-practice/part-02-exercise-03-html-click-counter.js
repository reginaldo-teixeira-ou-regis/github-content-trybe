const counterClicks = document.getElementById('counter-clicks');
const buttonClickHere = document.getElementById('btn-click');

let clickCount = 0;
counterClicks.innerHTML = clickCount;

buttonClickHere.addEventListener('click', () => counterClicks.innerHTML = ++clickCount);

/* buttonClickHere.addEventListener('click', () => {
    clickCount += 1;
    counterClicks.innerHTML = clickCount;
}) */

const counterClicks2 = document.getElementById('counter-clicks-2');
const buttonDecrement = document.getElementById('btn-decrement');
const buttonZero = document.getElementById('btn-zero');
const buttonIncrement = document.getElementById('btn-increment');

let clickCount2 = 0;
counterClicks2.innerHTML = clickCount2;

buttonDecrement.addEventListener('click', () => counterClicks2.innerHTML = --clickCount2);
buttonZero.addEventListener('click', () => counterClicks2.innerHTML = clickCount2 = 0);
buttonIncrement.addEventListener('click', () => counterClicks2.innerHTML = ++clickCount2);