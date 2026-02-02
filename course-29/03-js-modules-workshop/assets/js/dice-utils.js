export function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}

export function diceSetRoll(dice = 1){
    const diceSet = [];
    for (let i = 0; i < dice; i++) {
        diceSet.push(diceRoll())
    }
    return diceSet;
}