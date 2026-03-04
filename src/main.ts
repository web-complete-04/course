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
    fName: 'Robert',
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
