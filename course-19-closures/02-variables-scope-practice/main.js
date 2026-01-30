console.log('random pick an element in an array');

const options = ['chocolate', 'pancake', 'icecream', 'candy', 'cake'];
const students = ['Ovidiu', 'Madalin', 'Razvan', 'Claudiu', 'Marinela', 'Cristina'];
const diceSides = [1, 2, 3, 4, 5, 6];
const fruits = [`🍎`, `🍏`, `🍐`, `🍑`, `🍉`, `🍈`, `🍊`, `☘`];

function randomPick(availableOptions) {
    let randomIndex = Math.floor(Math.random() * availableOptions.length);
    return availableOptions[randomIndex];
}

console.log(randomPick(fruits));