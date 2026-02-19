

export class Player {
    // dice should be a Dice object 
    constructor(name, dice) {
        console.log(`Player ${name} entered the game with a dice with ${dice.sides} sides.`);
        this.name = name;
        this.score = 0;
        this.dice = dice;
    }

    rollDice(){
        console.log('---');
        const diceRoll = this.dice.roll();
        console.log(`New dice roll for ${this.name}: ${diceRoll} (with ${this.dice.sides} sides)`);
        
        this.score += diceRoll;
        console.log(`Current score for  ${this.name}: ${this.score}`);
    }
}