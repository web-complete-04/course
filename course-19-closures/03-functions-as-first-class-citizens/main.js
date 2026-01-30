console.log('Special things for JS related to functions');

// function displayMsg(){
//     console.log('Hello');   
// }

/*
 THEORY
 */
const displayMsg = function(userName){
    console.log(`Hello ${userName}`);   
}

//displayMsg('Stranger')

/* 
    EXAMPLE
*/

function displayRandomNumber(callback){
    let randomNr = Math.floor(Math.random() * 100) + 1;
    callback(randomNr);
}


const displayInConsole = function (message){
    console.log(message);
}

const displayAsAlert = function (message){
    alert(message);
}

const displayInDOM = function (message){    
    document.body.innerHTML += `<p>${message}</p>`;
}

displayRandomNumber(displayInDOM);