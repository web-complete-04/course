console.log('Flow control structures');

debugger;

// sequence - execution of each instruction at a time
let userNr = prompt('input a number to count to: ');
userNr = Number(userNr);

// decision
if(isNaN(userNr)){
    alert('Invalid value')
}
else {

    let i = 0;
    // iteration
    while (i <= userNr) {
        alert(i);

        i++; // i = i + 1;
    }
    console.log('end of iteration');
}
console.log('end of decisional structure');

console.log('end of program');