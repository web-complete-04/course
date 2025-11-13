console.log('Display time in minutes and seconds');

let seconds = prompt(`Input the number of seconds: `);
seconds = Number(seconds);
console.log(seconds, typeof seconds);

for (let i = seconds; i >= 0; i--) {
    const secondsDisplay = i % 60;
    const minutesDisplay = Math.floor(i / 60);
    console.log(`${i} |  minutes: ${minutesDisplay} seconds: ${secondsDisplay}`);
}