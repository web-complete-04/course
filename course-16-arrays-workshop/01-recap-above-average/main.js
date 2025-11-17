console.log('Display grades above average');

// read the number of grades to input
let gradesNr = prompt(`How many grades you wish to input?`);
gradesNr = Number(gradesNr);

// 
let sum = 0;
const grades = [];
for (let i = 0; i < gradesNr; i++) {
    grades[i] = prompt(`Input grade ${i + 1}`);
    grades[i] = Number(grades[i]);

    sum = sum + grades[i];
}
// console.log(grades);

let avg = sum / grades.length;
// console.log(avg);

for (let i = 0; i < gradesNr; i++) {
    if(avg < grades[i]){
        alert(grades[i]);
    }
}