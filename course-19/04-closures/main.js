console.log('Closures');

/*
THEORY
*/

function createFunc(){
    const babyFunc = function(){
        console.log('This is a function returned by the createFunc');
    }

    return babyFunc;
}


/*
PRACTICE
*/
function createCounter(counterName){
    console.log(`New counter was created: ${counterName}`);

    let count = 0;
    return function(){
        count++;
        console.log(`Counter ${counterName} current value is ${count}`);
    }
}


const c1 = createCounter('Adi')
const c2 = createCounter('Web Complete 04')