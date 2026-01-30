console.log('Promises - fetch explained! Key point: promise chaining');

const url = 'https://api.chucknorris.io/jokes/categories';
// const url = 'https://api.chucknorris.io';

// fetch RETURNS a promise
fetch(url)
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw new Error('the API response was not as expected!')
        }

        return response.json();
    })
    .then (categoriesArray => {
        console.log(categoriesArray);

        if(!categoriesArray.length){
            throw new Error('No categories were provided by the API')
        }
        
        const randomIndex = Math.floor(Math.random() * categoriesArray.length)
        const randomCategory = categoriesArray[randomIndex];
        return randomCategory;
    })
    .then(category => {
        // display the data (somehow...)
        console.log(`Your random category is: ${category}`);
    })
    .catch(error => {
        console.log('Promise was reject! We need to take action and catch the error here!')
        console.log(error);
        alert(`Error: ${error.message}`);
    })


/*
const customPromise = new Promise((resolve, reject) => {
    // if promise will provide the expected data - call resolve(data)
    resolve({message: 'Promise is resolved', value: 150})

    // if promise will not the expected data - call reject(error)1
    // reject({errorMsg: 'something bad happened!', errorCode: 101})
});


customPromise
    .then(data => {
        // promise was fulfilled!
        console.log(data);
        return data.value;
    })
    .then(maxValue => {
        console.log('This is the first chained promise!');

        // generate random number, based on a value provided bt the promise
        console.log(`we can now generate a random number between 0 and ${maxValue}`);
        const randomNr = Math.floor(Math.random() * (maxValue + 1));
        console.log(`The random number is: ${randomNr}`);

        return maxValue * 2;
    })
    .then(doubleRandom => {
        console.log('This is the second chained promise!');
        alert(doubleRandom)
    })
    .catch(error => console.log(error))
*/