console.log('main.js running...');

//
let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

// 
let nr2 = prompt('Input the second number: ');
nr2 = Number(nr2);

//  compute sum
let sum = nr1 + nr2;
alert(`${nr1} + ${nr2} = ${sum}`);
// alert(`${nr1} + ${nr2} = ${nr1 + nr2}`);

// compute product
let prod = nr1 * nr2;
alert(`${nr1} * ${nr2} = ${prod}`);
// alert(`${nr1} * ${nr2} = ${nr1 * nr2}`);

// compute power
let pow = nr1 ** nr2;
//alert(`${nr1} to the power of ${nr2} = ${pow}`);
alert(nr1 + ' to the power of ' + nr2 + ' = ' + pow);


/*
'3' + 2 => '32'
3 + '2' => '32'
3 + 3 + '1' => '61'
'1' + 3 + 3 => '133'
'1' + 3 * 3 => '19'
*/