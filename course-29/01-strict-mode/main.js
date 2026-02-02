"use strict";
console.log('JS strict mode');

// declaring a variable in a non strict mode...
x = 70;

// asigning a value to a reserved word
NaN = 3;

// declaring a global variable inside of a function
function test(){
    x = 4;
}

test();