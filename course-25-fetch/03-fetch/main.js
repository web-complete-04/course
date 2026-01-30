console.log('JS - using fetch');

const display = document.querySelector('#display');

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        display.innerHTML = `
            <div>
                <img src="${data.icon_url}">
            </div>
            <small>${data.created_at}</small>
            <p>${data.value}</p>`
    })

console.log('main.js was executed!');