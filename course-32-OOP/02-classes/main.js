console.log('Classes in JS');

class Player {
    // this class methos runs automatically when an object of this class is created!
    constructor(name, diceSides = 6) {
        console.log(`Player ${playerName} entered the game.`);
        this.name = name;
        this.score = 0;
        this.diceSides = diceSides;
    }

    rollDice(){
        console.log('---');
        const dice = Math.floor(Math.random() * this.diceSides) + 1;
        console.log(`New dice roll for ${this.name}: ${dice}`);
        
        this.score += dice
        console.log(`Current score for  ${this.name}: ${this.score}`);
    }
}


const p1 = new Player('Bob');
const p2 = new Player('Jane');
const p3 = new Player('Anne');

for (let i = 1; i <= 10; i++) {
    console.log('');
    console.log(`ROUND ${i} BEGINS!`);

    p1.rollDice();
    p2.rollDice();
    p3.rollDice();
}