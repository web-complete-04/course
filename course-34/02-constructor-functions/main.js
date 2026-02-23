// JS Objects can also be created like this!
function Person(name){
    this.name = name;

    this.greet = function(){
        return  `${this.name} says Hi!!!!`
    }
}

const person = new Person('Jane');
console.log(person);
console.log(person.greet());
