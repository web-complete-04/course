console.log('Memory game');

function generateNumbers(maxNumber = 100){
    const numbers = [];

    for (let i = 1; i <= maxNumber; i++) {
        numbers.push(i);
    }

    // fisher-yates
    for (let i = numbers.length - 1; i > 0 ; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }

    return numbers;
}


function createSquares(numbers, parentCssSelector){
    const parentElem = document.querySelector(parentCssSelector);

    for (let i = 0; i < numbers.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = numbers[i];
        parentElem.append(square);

        square.addEventListener('click', function(e){
            if(e.target.textContent != numberToClick){
                errors++;
                return;
            }
            
            e.target.classList.add('clicked-square');
            numberToClick++;
        })
    }
}

/**
 * MAIN PROGRAM
 */
let numberToClick = 1;
let errors = 0;

const numbersArray = generateNumbers();
createSquares(numbersArray, '#squares-container');