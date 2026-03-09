// Array iterator methods
const users = [
  {
    name: 'jsmith',
    password: 'pass123',
    fName: 'John',
    lName: 'Smith',
    height: 180,
    weight: 100,
  },
  {
    name: 'mchen',
    password: 'pass123',
    fName: 'Maria',
    lName: 'Chen',
    height: 165,
    weight: 62,
  },
  {
    name: 'awilson',
    password: 'pass123',
    fName: 'Alex',
    lName: 'Wilson',
    height: 175,
    weight: 70,
  },
  {
    name: 'jbrown',
    password: 'pass123',
    fName: 'James',
    lName: 'Brown',
    height: 182,
    weight: 82,
  },
  {
    name: 'sgarcia',
    password: 'pass123',
    fName: 'Sofia',
    lName: 'Garcia',
    height: 168,
    weight: 65,
  },
  {
    name: 'dmiller',
    password: 'pass123',
    fName: 'David',
    lName: 'Miller',
    height: 178,
    weight: 78,
  },
  {
    name: 'ltaylor',
    password: 'pass123',
    fName: 'Lisa',
    lName: 'Taylor',
    height: 162,
    weight: 58,
  },
  {
    name: 'rjones',
    password: 'pass123',
    fName: 'John',
    lName: 'Jones',
    height: 185,
    weight: 85,
  },
  {
    name: 'ewhite',
    password: 'pass123',
    fName: 'Emma',
    lName: 'White',
    height: 170,
    weight: 68,
  },
  {
    name: 'clee',
    password: 'pass123',
    fName: 'Chris',
    lName: 'Lee',
    height: 176,
    weight: 72,
  },
];

type User = (typeof users)[0];
type ChangedUser = {
  fullName: string;
  bmi: number;
}[];

// Array.prototype.myMap = myMap;

// 1. Create a function that returns an array of objects with { fullName: fName + ' ' + lName, height, weight };
function changeArray(userArr: User[]): ChangedUser {
  // const ret: ChangedUser = [];
  // userArr.forEach(user => ret.push({
  //   fullName: `${user.fName} ${user.lName}`,
  //   bmi: Number((user.weight / (user.height / 100) ** 2).toFixed(1)),
  // }));
  // return ret;

  // const ret: ChangedUser = [];
  // for(let i = 0; i < userArr.length; i++) {
  //   const user = userArr[i];
  //   ret.push({
  //     fullName: `${user.fName} ${user.lName}`,
  //     bmi: Number((user.weight / (user.height / 100) ** 2).toFixed(1)),
  //   });
  // }
  // return ret;

  // const ret: ChangedUser = [];
  // for(const user of userArr) {
  //   ret.push({
  //     fullName: `${user.fName} ${user.lName}`,
  //     bmi: Number((user.weight / (user.height / 100) ** 2).toFixed(1)),
  //   });
  // }
  // return ret;

  // return userArr.myMap((user) => ({
  //   fullName: `${user.fName} ${user.lName}`,
  //   bmi: Number((user.weight / (user.height / 100) ** 2).toFixed(1)),
  // }))

  return userArr.map((user) => ({
    fullName: `${user.fName} ${user.lName}`,
    bmi: Number((user.weight / (user.height / 100) ** 2).toFixed(1)),
  }));
}

const changed = changeArray(users);
console.log(changed);

function myMap<T, R>(
  this: T[],
  fn: (elem: T, index?: number, arr?: T[]) => R,
): R[] {
  const ret = [];
  for (let i = 0; i < this.length; i++) {
    const elem = this[i];
    ret.push(fn(elem, i, this));
  }
  return ret;
}

// function User(name: string) {
//   this.name = name;
// }

// User.thisIsStatic = function () {
//   console.log('This is also static');
// }

// const user1 = new User('Paul');
// console.log(user1.name);


// class Admin extends User {
//   constructor(name: string) {
//     super(name);
//     this.isAdmin = true;
//   }

//   walk() {
//     console.log('walking')
//   }

//   static whatever() {
//     console.log('This is a static function');
//   }
// }
// const user2 = new Admin('Andrei');

// Admin.prototype.sayHello = function() {
//   console.log('Hello from', this.name);
// }

// console.log(Admin.whatever());

// user2.sayHello();

function onlyHigherThan(users: User[], minHeight: number) {
  // return users.map((user) => user.height >= minHeight ? user : false);

  // const ret: User[] = [];
  // users.forEach((user) => {
  //   if(user.height >= minHeight) {
  //     ret.push(user);
  //   }
  // })
  // return ret;

  // const ret: User[] = [];
  // for(const user of users) {
  //   if(user.height >= minHeight) {
  //     ret.push(user);
  //   }
  // }
  // return ret;

  return users.filter((user) => user.height >= minHeight);
}

console.log(onlyHigherThan(users, 180));

function findUsers(users: User[], fName: string) {
//   const ret: User[] = [];
//   for(const user of users) {
//     if(user.fName === fName) {
//       ret.push(user);
//     }
//   }

//   return ret;

  return users.filter((user) => user.fName === fName);
}

function findUser(users: User[], fName: string) {
  // for(const user of users) {
  //   if(user.fName === fName) {
  //     return user;
  //   }
  // }

  return users.find((user) => user.fName.toLowerCase() === fName.toLocaleLowerCase());
}

console.log(findUser(users, 'john'));

const arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 2, 3, 1];
const arr3 = [1, 2, 3, 4, 5];

function compareArr(a1: any[], a2: any[]) {
  if(a1.length !== a2.length) {
    return false;
  }

  for (const elem of a1) {
    if(!a2.includes(elem)) {
      return false;
    }
  }

  return true;
}

console.log(compareArr(arr1, arr3));


console.log(users.reduce((sum, user) => sum + user.height, 0));

function reducer(sum: number[], num: number) {
  return (sum.push(num * 3), sum);
}

console.log(
    arr3
      .filter(num => num >= 3)
      .map(num => num ** 2)
      .reduce((sum, num) => sum + num, 0)
      .toFixed(2)
);

if(arr2 && arr2.length > 4) {
  console.log('Yeee')
}

// arr2 = null;

console.log(arr2 && arr2.filter(num => num > 4));

function add(num1?: number, num2 = 2) {
  num1 = num1 ?? 2;
  return num1 + num2;
}


console.log(add());

// Rest parameter
function superAdd(...numbers: number[]) {
  // debugger;
  return numbers.reduce((sum, num) => sum + num);
}

console.log(superAdd(2, 4, 6, 7, 8, 10, 11));

// Spread operator
console.log(add(...arr1))

const superArr = [...arr1, 'Paul', 'Negoescu'];

console.log(superArr);

const cloneArr1 = [...arr1];
const cloneArr2 = structuredClone(arr1); // a lot better!!!
const fakeClone = arr1;

cloneArr1[2] = 43;

console.log(arr1);

const obj1 = {
  name: "Paul",
  altceva: 42,
};

const obj2 = {
  ...obj1,
  prop: 'test'
}

console.log(obj2);

// Destructuring
let a = 'Paul';
let b = 'Negoescu';
console.log({a, b});

// const tmp = a;
// a = b;
// b = tmp;
[a, b] = [b, a];

console.log({a, b});

const [prima, aDoua] = a.split('');

const {altceva: altNumeDeVar, name, nuExista = 'Are valoare'} = obj1;

console.log({prima, aDoua, altNumeDeVar, name, nuExista});

function test({name, prop, nuAreValoare = 'Valoare implicita'}: {name: string, prop: string, nuAreValoare?: string}) {
  console.log({name, prop, nuAreValoare});
}

function test2(o: {name: string, prop: string}) {
  const {name, prop} = o;
  console.log({name, prop});
}


test(obj2);


