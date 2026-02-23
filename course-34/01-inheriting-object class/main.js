const p = {
    name: 'Bob',
    age: 26,
    location: 'CJ'
}
console.log(p);


class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    toString(){
        return `This is a Person with name: ${this.name}, age: ${this.age}, location: ${this.location}`;
    }
}


class Student extends Person {
    constructor(name, age, location){
        super(name, age, location);
        this.grades = [];
    }

    toString(){
        return `${super.toString()}, but it's also a Student with ${this.grades.length} grades!`;
    }
}


const person = new Person('Ion', 44, 'TM');
console.log(person);
console.log(person.toString());



const student = new Student('Simona', 22, 'B');
console.log(student);
console.log(student.toString())