console.log('OOP in JS');



// OOP model of a student
const student = {
    // properties
    name: "Andrei",
    grades: [],

    // behaviour
    addGrade(newGrade) {
        //console.log('This should add a grade to the current user');
        this.grades.push(newGrade);
    },

    getCourseGrade(){
        if(!this.grades.length) {
            throw new Error('No grades for this sudent!')
        }

        let sum = 0;
        this.grades.forEach(grade => sum += grade);
        return sum / this.grades.length;
    }
}


// OOP model of a player
const player1 = {
    // properties
    name: "Player 1",
    score: 0,
    diceSides: 12,

    // behavior - player will roll a 6 sided dice and change the score; method name: rollDice()
    rollDice(){
        const dice = Math.floor(Math.random() * this.diceSides) + 1;
        console.log(`New dice roll: ${dice}`);
        
        this.score += dice
        console.log(`Current score: ${this.score}`);
    }
}

const player2 = {
    // properties
    name: "Player 2",
    score: 0,
    diceSides: 12,

    // behavior - player will roll a 6 sided dice and change the score; method name: rollDice()
    rollDice(){
        const dice = Math.floor(Math.random() * this.diceSides) + 1;
        console.log(`New dice roll: ${dice}`);
        
        this.score += dice
        console.log(`Current score: ${this.score}`);
    }
}