const x = 100;

export function sum(arr) {    
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });

    return sum;
}


export function double(arr){
    return arr.map(element => element * 2);
}