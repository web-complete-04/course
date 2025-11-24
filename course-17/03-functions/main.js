console.log('Randon prize giveaway');

let participants = [
    `Adi`,
    `Cristina`,
    `Claudiu`,
    `Ovidiu`,
    `Marinela`,
    `Razvan`,
    `Madalin`
];

let prizes = [
    `1🍕`,
    `2🍕`,
    `3🍕`,
    `1🍔`,
    `2🍔`,
    `1🍨`,    
];


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // interchange
        [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
    }

    return arr;
}



// THIS IS THE MAIN PROGRAM!
participants = shuffleArray(participants);
prizes = shuffleArray(prizes);

for (let i = 0; i < Math.min(participants.length, prizes.length); i++) {
    console.log(`${participants[i]} wins: ${prizes[i]}`)
}
