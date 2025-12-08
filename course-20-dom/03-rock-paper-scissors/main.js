console.log(`Rock Paper Scissors`);

const options = [`✊`, `🖐`, `✌`];
const output = document.querySelector('#output');

setTimeout(function(){
    const randomOptionsIndex = Math.floor(Math.random() * options.length);
    console.log(`Generate a new option: ${randomOptionsIndex}`);    
    output.textContent = options[randomOptionsIndex];
}, 3000)