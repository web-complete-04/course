console.log('Promises in JS');

/*
// THIS is an instance of a promise, to be consumed later
const promise = new Promise((resolve, reject) => {
    console.log('Promise was created (pending)...');
    setTimeout(() => {
        console.log('Promise is evaluated!');
        const random = Math.random();

        // we use a random value to trigger a random outcome
        if(random > 0.5) {
            console.log('Promise is resolved 🤩!');
            resolve({name: 'Gigi', age: 45});
        }
        else {
            console.log('Promise is rejected 😥!');
            reject('Promise was not fulfilled!')
        }
    }, 3000)
});

// the code will be executed after the promise is fulfilled or rejected
promise
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/



// calling this function will return a promise
function getData(){
    return new Promise((resolve, reject) => {
        console.log('Promise was created (pending)...');
        setTimeout(() => {
            const random = Math.random();
            if(random > 0.5) {
                console.log('Promise is resolved 🤩!');
                resolve({name: 'Gigi', age: 45});
            }
            else {
                console.log('Promise is rejected 😥!');
                reject('Promise was not fulfilled!')
            }
        }, 3000)
    })
}

// the code will be executed after the promise is fulfilled or rejected
getData()
    .then(data => console.log(data))
    .catch(err => console.log(err));