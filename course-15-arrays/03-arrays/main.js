console.log('arrays in JS');


let studentsNr = prompt(`How many students are there?`);
studentsNr = Number(studentsNr);

let students = [];
for (let i = 0; i <= studentsNr; i++) {
    students[i] = prompt(`Input name for student ${i + 1}`);
}

console.log(students);

const randomIndex = Math.floor(Math.random() * students.length); // a number between 0 ... students.length - 1
alert(`The chosen one is: ${students[randomIndex]}`);
