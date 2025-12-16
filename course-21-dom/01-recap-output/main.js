
function getRandomDiceImage(){
    const diceImgs = [
        'https://www.svgrepo.com/show/434784/dice-1.svg',
        'https://www.svgrepo.com/show/434786/dice-2.svg',
        'https://www.svgrepo.com/show/434785/dice-3.svg',
        'https://www.svgrepo.com/show/434788/dice-6.svg',
        'https://www.svgrepo.com/show/434787/dice-5.svg',
        'https://www.svgrepo.com/show/434789/dice-6.svg',
    ];

    const randomIndex = Math.floor(Math.random() * diceImgs.length);
    return diceImgs[randomIndex];
}

const diceImgList = document.querySelectorAll('.player-1 .dice-img');
console.log(diceImgList);

for (let i = 0; i < diceImgList.length; i++) {
    const newImgSrc = getRandomDiceImage(); 
    diceImgList[i].src = newImgSrc;
}