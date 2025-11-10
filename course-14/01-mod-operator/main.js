console.log('The MOD (%, modulo) operator');

let output = '';
let i = 0;
while (i < 12){
    let modVal = i % 4; 
    console.log(modVal);

    switch (modVal) {
        case 0:
            output += '🍦';
            break;

        case 1:
            output += '🎂';
            break;

        case 2:
            output += '🍎'
            break;

        case 3:
            output += '🥓'
            break;
    }
    i++;
}

console.log(output);
