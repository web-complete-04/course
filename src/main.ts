// Primitive types
// number, string, boolean, undefined, null, bigint, symbol
let myVar: string | number = 'Paul';
myVar = 3;

// Array
const myArr: (number | string)[] = [1, 2, 3, 6, 'Paul'];
// const myArr: Array<number | string> = [1, 2, 3, 6];

// Tuple
const myTuple: [number, string, boolean] = [42, 'Paul', false];

type Paul = string | number;

const varNeo: Paul = 'test';

// Objects
type Person = {
  name: string;
  age: number;
  height: number;
  weight: number;
  calculateBmi(): number;
};

// interface IPerson {
//   name: string;
//   age: number;
//   height: number;
//   weight: number;
//   calculateBmi(): number;
// }

const person: Person = {
  name: 'Paul',
  age: 40,
  height: 1.85,
  weight: 100,
  calculateBmi() {
    return Number((this.weight / this.height ** 2).toFixed(1));
  },
};

const person2: Person = {
  name: 'Cristina',
  age: 25,
  height: 1.73,
  weight: 60,
  calculateBmi: person.calculateBmi,
};

console.log(
  myVar,
  myArr,
  myTuple,
  person.calculateBmi(),
  person2.calculateBmi(),
  person.calculateBmi === person2.calculateBmi,
);

function add(n1: number, n2: number): number
function add(n1: string, n2: string): string
function add(n1: number | string, n2: number | string) {
  if(typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
  if(typeof n1 === 'string' && typeof n2 === 'string') {
    return n1 + n2;
  }
}

const result = add(1, 2);
const result2 = add('Paul', 'Negoescu');


// Discriminated Unions
