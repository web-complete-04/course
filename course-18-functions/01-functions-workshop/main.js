console.log('Functions workshop');

debugger;

let searchElem = prompt('Input the text you search for: ');
searchElem = Number(searchElem);

const userValues = readNumbersArray();
const count = findElem(userValues, searchElem);
alert(`Your text was found ${count} times!`);