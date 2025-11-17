console.log('Names of the students whose grade is above the average');

let studentsNr = prompt(`How many students are there?`);
studentsNr = Number(studentsNr);

let grades = [];
let students = [];
let sum = 0;

for (let i = 0; i < studentsNr; i++) {
    // input the name
    students[i] = prompt(`Input the name of the student:`);

    // input the grade
    grades[i] = prompt(`Input the grade for ${students[i]}`);
    grades[i] = Number(grades[i]);

    // sum the grade
    sum += grades[i];
}

let avg = sum / studentsNr;

for (let i = 0; i < studentsNr; i++) {
    if(grades[i] > avg){
        alert(`${students[i]}: grade ${grades[i]}`);
    }
}