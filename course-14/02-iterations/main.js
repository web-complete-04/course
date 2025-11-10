console.log('Iterations');

/**
 * WHILE / WHILE DO
 */
let i = 10;
while (i < 10) {
    console.log(i);
    
    i++;
}

/**
 * DO WHILE STRUCTURE
 */
i = 10;
do {
    console.log(i);

    i++
} while (i < 10);

// DO WHILE - example
let userChoice;
do {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    alert(`You rolled: ${diceRoll}`);
    
    userChoice = confirm(`Do you want to continue`);
} while(userChoice)

/*
let userChoice;
do {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    userChoice = confirm(`You rolled: ${diceRoll}. \n\nDo you want to continue?`);
} while(userChoice)
*/

/**
 * FOR STATEMENT
 */
for (let i = 5; i < 10; i++) {
    console.log(i);
}

// FOR STATEMENT WITHOUT condition + break
for(let i = 0; ; i++){
    console.log(i);
    
    const oneMore = confirm('continue?');
    if(!oneMore){
        break;
    }
}

// FOR STATEMENT WITHOUT condition + break
for(let i = 0; true; i++){
    console.log(i);
    
    const oneMore = confirm('continue?');
    if(oneMore){
        console.log('user said one more');
        continue;
    }

    break;
}
