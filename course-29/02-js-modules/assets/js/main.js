import { sum, dif, pi as piAproximation } from "./utils.js";
import { sum as arraySum} from "./array-utils.js";

// main program

// imports from utlils.js module
let s = sum(5, 3);
console.log(s);

let d = dif(5, 3);
console.log(d);

console.log(piAproximation);


// imports frim array-utils.js module
console.log(arraySum([1, 2, 3]));