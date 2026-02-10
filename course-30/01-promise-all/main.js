console.log('main.js module started!');


// async functions ALWAYS return a promise!
async function getRandomNumber(index, minVal = 1, maxVal = 10) {
    console.log(`New promise is created - index: ${index} min: ${minVal} max: ${maxVal}`);
    const apiUrl = `https://www.random.org/integers/?num=1&min=${minVal}&max=${maxVal}&col=1&base=10&format=plain&rnd=new`;

    // getting the data
    const response = await fetch(apiUrl);
    const apiData = await response.text();
    const randomNumber = Number(apiData);

    // promise returned value
    return {
        promiseIndex: index,
        randomNumber
    };
}


function processRandomNumbers() {
    const promisesArray = [];
    for (let i = 0; i < 5; i++) {
        promisesArray.push(getRandomNumber(i, 1, 10))
    }

    // console.log(promisesArray);

    Promise.all(promisesArray)
        .then(values => {
            console.log(values);

            let sum = 0;
            values.forEach(promiseResult => {
                console.log(`promise ${promiseResult.promiseIndex} returned ${promiseResult.randomNumber}`)
                sum += promiseResult.randomNumber
            });
            console.log(`Sum is: ${sum}`);
        })
        .catch(err => console.log(err))
}

processRandomNumbers();