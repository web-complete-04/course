console.log('Array useful methods');

const collection = [`🍎`,`🍍`,`🍉`,`🍋`,`🍌`,`🥑`,`🍇`];

// remove an element from the begining of the array
console.log('');
console.log('Remove first element');
const first = collection.shift();
console.log(`Removed: ${first}!`);
console.log(collection);

// insert an element at the begining of the array
console.log('');
console.log('Add element at first in array');
collection.unshift(first);
console.log(`Added: ${first}!`);
console.log(collection);

// remove an element from the end of the array
console.log('');
console.log('Remove last element');
const last = collection.pop();
console.log(`Removed: ${last}!`);
console.log(collection);

// remove an element from the end of the array
console.log('');
console.log('Add as last element');
collection.push(last);
console.log(`Added at the end: ${last}!`);
console.log(collection);

// remove a couple of elements in the array from a specific index
console.log('');
console.log('Removes 4 elements starting from index 3');
const removed = collection.splice(3, 4);
console.log(removed);
console.log(collection);

// insert a couple of elements in the array at a specific index
console.log('');
console.log('Removes elements starting from index 3');
// collection.splice(2, 0, `🍑`, `🍊`);
//collection.splice(2, 0, removed[0], removed[1], removed[2], removed[3]);
collection.splice(2, 0, ...removed);
console.log(collection);