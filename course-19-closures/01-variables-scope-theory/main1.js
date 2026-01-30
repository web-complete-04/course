let x = 10;
let y = 100;

function increment(nr){
    // visible as a global variable
    nr++;
    return nr;
}

x = increment(x);
console.log(x);

y = increment(y);
console.log(y);
