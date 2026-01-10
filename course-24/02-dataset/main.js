let clicks = 0;

const display =  document.querySelector('.display');
const buttons = document.querySelectorAll('.counter-buttons button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){   
        const amountChange = Number(e.target.dataset.amount);
        clicks += amountChange;

        display.textContent = clicks;
    });
}