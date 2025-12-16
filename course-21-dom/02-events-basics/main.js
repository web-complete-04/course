/* start of code secttion that runs when the JS file is loaded */
const plusOneButton = document.querySelector('#plus-one');
const plusFiveButton = document.querySelector('#plus-five');
const resetButton = document.querySelector('#reset');

const setValueTextbox = document.querySelector('#set-value-textbox'); 
const setValueBtn = document.querySelector('#set-value-btn'); 


const counterDisplay = document.querySelector('.counter-display');
let count = 0;

counterDisplay.textContent = count;
/* end o the code section that runs when the JS file is loaded */

// this code runs each time the click event is triggered on the DOM element
plusOneButton.addEventListener('click', function(){
    counterDisplay.textContent = ++count;
});

plusFiveButton.addEventListener('click', function(){
    count += 5; // count = count + 5;
    counterDisplay.textContent = count;
});

resetButton.addEventListener('click', function(){
    count = 0;
    counterDisplay.textContent = count;
});


setValueBtn.addEventListener('click', function(){
    let newValue = setValueTextbox.value;
    console.log(newValue, typeof newValue);

    count = Number(newValue);
    counterDisplay.textContent = count;
})