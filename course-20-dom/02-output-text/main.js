const roll = Math.floor(Math.random() * 6) + 1;
console.log(roll);

const display = document.querySelector('#display');
display.textContent = roll;

