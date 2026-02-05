import config from "./config.js";
import { getRandomNumber } from "./get-random-number.js";
import { cardFactory, advancedCardFactory } from "./ui.js";

const cardsContainer = document.querySelector('#display');

// ITERATION 1
// implement players cards
// const players = ['Ion', 'Dan', 'Ana', 'Mara'];

// ITERATION 2
// implement imptroved players cards
const players = [
    {
        name: 'Ion',
        color: '#0000FF',
        avatar: '🚓'
    },
    {
        name: 'Dan',
        color: '#066363',
        avatar: '🚌'
    },
    {
        name: 'Ana',
        color: '#c47703',
        avatar: '🎱'
    }
]


async function drawCard(index){
    const randomData = await getRandomNumber(index);
    cardFactory(cardsContainer, randomData);
}

for (let i = 1; i <= config.randomNumbers; i++) {
    drawCard(i);
}