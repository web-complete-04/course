export class Dice {
    static sides = 6;
    
    static roll(){
        console.log(`Rolling a dice with ${Dice.sides} sides ...`);        
        return Math.floor(Math.random() * Dice.sides) + 1;
    }
}