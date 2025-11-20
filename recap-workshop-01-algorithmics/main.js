console.log('=== 🎲 Dice game 🎲 ===');

// values to store in memory 
// number of rounds (const)
// - score for player 1
// - score for player 2


// IMPLEMENTATION
// for each roud, 
//      - generate & display for each player a randon number between 1 and 6
//      - add the value to the current score

const gameRounds = 10;


let players = [
    {
        name: 'Mugurel',
        avatar: '⚽',
        score: 0
    },
    {
        name: 'Codruța',
        avatar: '😻',
        score: 0
    },
    {
        name: 'Petruț',
        avatar: '🦕',
        score: 0
    },
    {
        name: 'Cristinuța',
        avatar: '🦋',
        score: 0
    },
    {
        name: 'Cornelian',
        avatar: '⛸',
        score: 0
    }];

console.log(`The players are: `);
for (let i = 0; i < players.length; i++) {
    console.log(`[${players[i].avatar}] ${players[i].name} `);
}

// the game
for (let i = 0; i < gameRounds; i++) {
    console.log(``);
    console.log(`** ROUND ${i + 1} STARTS **`);

    for (let j = 0; j < players.length; j++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        players[j].score = players[j].score + diceRoll;
        console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
    }
}