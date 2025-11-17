console.log(`Student's turn to answer`);

let students = ['Ana', 'Ion', 'Geo', 'Andi', 'Mara'];

let presentStudents = [];
for (let i = 0; i < students.length; i++) {
    let isPresent = confirm(`Is ${students[i]} present?`);
    if(isPresent){
        presentStudents.push(students[i]);
        // presentStudents[presentStudents.length] = students[i];
    }
}
console.log(presentStudents);

for (let i = 0; true; i++) {
    let next = confirm(`${presentStudents[i % presentStudents.length]} turn to answer. Continue?`);
    if(!next){
        break;
    }
}