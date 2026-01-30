console.log('Promises - async await!');


async function getCategories() {
    const url = 'https://api.chucknorris.io/jokes/categories';

    // try {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    // } catch (error) {
    //     console.log('In try catch');
    //     console.error(error)
    // }
}


/*
getCategories()
    .then(data => console.log(data))
    .catch(error => {
        // error it will be caught here if not before
        console.log('Ouside async function!')
        console.error(error)
    })
*/


async function consumeData() {
    try {
        const data = await getCategories();
        console.log(data); // actual consume of data     
    } catch (error) {
        console.error(error) // notify user that something went wrong!
    }
}

consumeData()