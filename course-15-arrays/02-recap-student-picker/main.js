console.log('Infinite student picker');


let student;
let next = true;

for (let count = 0; next; count++) {
    switch (count % 4) {
        case 0:
            student = `Ovidiu`
            break;
    
        case 1:
            student = `Marinela`
            break;
    
        case 2:
            student = `Razvan`
            break;
            
        case 3:
            student = `Claudiu`
            break;
    }
    
    next = confirm(`${student} should answer. Do you want to continue?`);
}