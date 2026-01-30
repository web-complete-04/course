// A function that counts how many times a given value is found in a given array
function findElem(srcArray, searchedElem) {
    let count = 0;
    for (let i = 0; i < srcArray.length; i++) {
        if(srcArray[i] === searchedElem){
            count++
        }
    }

    return count;
}


// A function that reads an array using prompt dialog box
function readArray(){
    let arrayLen = prompt(`Input the number of elements: `);
    arrayLen = Number(arrayLen);

    const arr = [];
    for (let i = 0; i < arrayLen; i++) {
       arr[i] = prompt(`Input element #${i + 1}`);
    }

    return arr;
}


// A function that reads an array of number using prompt dialog box
function readNumbersArray(){
    const numbersArr = readArray();    
    for (let i = 0; i < numbersArr.length; i++) {
        numbersArr[i] = Number(numbersArr[i])
    }

    return numbersArr;
}


