/**
 * create a JS module that 
 *  1. exports a function named diceRoll() that simulates a 6 side dice roll
 *  2. exports a function names diceSetRoll(dice) that simulates a number of "dice" roll
 */
import { diceRoll, diceSetRoll } from "./dice-utils.js";

console.log('main js loaded');

const dice = diceRoll();
console.log(dice);

const diceSet = diceSetRoll(6);
console.log(diceSet);