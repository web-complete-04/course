console.log('Array methods recap');

const students = [
    {
        name: "Ion",
        location: "București",
        grades: [9.23, 8.11, 7.24]
    },
    {
        name: "Ana",
        location: "Cluj",
        grades: [8.55]
    },
    {
        name: "Alex",
        location: "Craiova",
        grades: []
    },
    {
        name: "Dana",
        location: "Dej",
        grades: [7.23, 5.22]
    },
    {
        name: "Petre",
        location: "Covasna",
        grades: []
    }
];

// filter
const studentsFromCluj = students.filter(s => s.location == 'Cluj');
console.log(studentsFromCluj);

// filter
const studentsWithNoGrades = students.filter(s => !s.grades.length);
console.log(studentsWithNoGrades);

// filter
const searchTerm = 'na';
const studentsContainingSearchTerm = students.filter(s => s.name.includes(searchTerm) || s.location.includes(searchTerm));
console.log(studentsContainingSearchTerm);

// sort by name - MUTATES the array!
students.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(students);