console.log('variables scope in JS');
let x = 10;

function increment(){
    // local variable
    let test = 10;
    console.log(test);
    
    // visible as a global variable
    x++;
}

// function call
increment();

// function call
increment();

console.log(x);