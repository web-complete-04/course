console.log('Promises - return a promise!');

function getCategories(){
    const url = 'https://api.chucknorris.io/jokes/categories';

    return new Promise((resolve, reject) => {
        // async code to be executed
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}


getCategories()
    .then(categories => {
        console.log('');
        console.log('=== Categories list promise was fulfilled ===');
        categories.forEach(c => console.log(c))
    })
    .catch(error => {
        console.log('Treating error in my catch...')
        console.log(error);
    })


getCategories()
    .then(categoriesArray => {
        console.log('');
        console.log('=== Random category promise was fulfilled ===');
        const randomIndex = Math.floor(Math.random() * categoriesArray.length)
        console.log(categoriesArray[randomIndex]);
    })
    .catch(error => {
        console.log('Treating error in my catch...')
        console.log(error);
    })
