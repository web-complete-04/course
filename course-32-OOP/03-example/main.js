import { Dice } from "./dice.class.js";
import { Player } from "./player.class.js";

console.log('OOP Examples');

const bobDice = new Dice(12)
const p1 = new Player('Bob', bobDice);

const aliceDice = new Dice(7)
const p2 = new Player('Alice', aliceDice);


for (let i = 1; i <= 10; i++) {
    console.log('');
    console.log(`=== ROUND ${i} ===`);

    p1.rollDice();
    p2.rollDice();
}