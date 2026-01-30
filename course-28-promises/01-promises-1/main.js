console.log('Promises - reality hits hard!');



function getCategories(){
    const url = 'https://api.chucknorris.io/jokes/categories';
        
    return fetch(url)
                .then(response => response.json())
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