import { Dice } from "./dice.js";

/*
 Should export a Turtle class with the following charateristics
    1. A distace property: initial value 0, stores the traveled distance od the turtle (integer value)
    2. A name property. 
    3. A move method: simulation of a 6 sided dice, on call should add a random integer between 1 and 6 to the distance property
 */

export class Turtle {
    constructor(name, avatar){
        console.log(`${name} is a Turtle!`)
        this.distance = 0;
        this.name = name;
        this.avatar = avatar;
    }


    rollDice(){
        return Dice.roll();
    }

    
    move(){
        const moveDistance = this.rollDice();
        this.distance += moveDistance;
        console.log(`${this.name} | ${this.avatar} rolls: ${moveDistance}. Current distance: ${this.distance}`);
        return moveDistance;
    }
}


/*
 * A Lucky Turtle has a lucky number, 
 * Each time it rolls its lucky number, it has the chance to roll the dice once again.
 */
export class LuckyTurtle extends Turtle {

    constructor(name, avatar, luckyNumber){
        console.log(`${name} is a LuckyTurtle!`)
        // call the inherited class constructor
        super(name, avatar);
        this.luckyNumber = luckyNumber;
    }

    move(){
        const diceRoll = super.move();
        if(diceRoll === this.luckyNumber){
            console.log(`🍀🍀🍀 ${this.name} rolls its lucky number and has the chance to roll again!!!`);
            super.move();
        }
    }

}