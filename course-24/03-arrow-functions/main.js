console.log('Arrow functions');

// function diceRoll(){
//     const dice = Math.floor(Math.random() * 6) + 1;
//     return dice;
// }

// const diceRoll = function () {
//     const dice = Math.floor(Math.random() * 6) + 1;
//     return dice;
// }

const firstDiceRoll = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}


// const diceRoll = function () {
//     return Math.floor(Math.random() * 6) + 1;
// }

const diceRoll = () => Math.floor(Math.random() * 6) + 1;


// function add(val1, val2) {
//     return val1 + val2
// }

const add = (val1, val2) => val1 +  val2;


// function next(nr){
//     return nr + 1;
// }

const next = nr => nr + 1;


// function double(arr){
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }

//     return newArr;
// }

const double = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }

    return newArr;
}


/**
 * Array methods
 */

const demoArray = [1, 3, 9, -10, -15];

// for (let i = 0; i < demoArray.length; i++) {
//     console.log(demoArray[i]);
// }

console.log('Using foreach to iterate in an array');
demoArray.forEach(a => console.log(a));                 // single param
demoArray.forEach((el, i) => console.log(el , i));      // double params


const doubledArray = demoArray.map(e => e * 2);
console.log(doubledArray);


const demoDiv = document.querySelector('#demo');

// demoArray
//     .map(e => {
//         const btn = document.createElement('button');
//         btn.textContent = e;
//         return btn;
//     })
//     .forEach(e => demoDiv.append(e))

demoArray.forEach(e => {
    const btn = document.createElement('button');
    btn.textContent = e;
    demoDiv.append(btn);
});