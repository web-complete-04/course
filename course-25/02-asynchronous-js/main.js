console.log('Async JS....');

// SET TIMEOUT
const seconds = 1;
setTimeout(
    () => console.log(`${seconds} seconds passed!`), 
    seconds * 1000
);

// CLICK ON BUTTON
document.querySelector('button')
    .addEventListener('click', () => console.log('Button was clicked!'));

// current stack code!
for (let i = 0; i < 50000; i++) {
    console.log(i);
}

console.log('main.js file was executed!');