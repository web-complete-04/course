console.log('ex-2 rolling...');

const randomNr1 = Math.floor(Math.random() * 10) + 1;
const randomNr2 = Math.floor(Math.random() * 10) + 1;

let userAnswer = prompt(`What is ${randomNr1} + ${randomNr2} ?`);
userAnswer = Number(userAnswer);

const sum = randomNr1 + randomNr2;
if(userAnswer === sum){
    alert(`Yeeey! Your anwser is correct 🏆`);
}
else {
    alert(`Nooooo! Your anwser is wrong 😟. The correct answer is: ${sum}`);
}