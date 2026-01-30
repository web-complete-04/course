console.log('fetch: then() vs async & await');


const apiUrl = 'https://rickandmortyapi1.com/api/character';

/*
let responseCode;

fetch(apiUrl)
    .then(response => {
        // HTTP response is received
        console.log(response.status);
        responseCode = response.status;
        return response.json();
    })
    .then(data => {
        console.log('response body was parsed!');

        switch (responseCode) {
            case 200:
                console.log('All good!');
                console.log(data)
                break;
        
            default:
                console.log('Not good at all!!!')
                console.error(data)
                break;
        }
    })
    .catch(error => {
        console.log('There was an error on the request:');
        console.log(error);
    });
    */

async function getCharacter(characterId) {
    try {
        const response = await fetch(`${apiUrl}/${characterId}`);
        const data = await response.json();

        switch (response.status) {
            case 200:
                console.log('All good!');
                console.log(data)
                break;

            default:
                console.log('Not good at all!!!')
                console.error(data)
                break;
        }
    } catch (error) {
        console.error(error);
    } finally {
        console.log('this will be executed no matter what...')
    }
}

getCharacter(11);