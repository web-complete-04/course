console.log('Basics of DOM');

/**
 * METHODS USED to get reference to the DOM Elements        
 *  1. document.getElementById("elemId")                    - returns THE elements having the specified ID
 *  2. document.getElementsByClassName("className")         - returns ALL elements having the specified CLASS
 *  3. document.getElementsByTagName("tagName")             - returns ALL elements having the specified TAG
 *  4. document.querySelector("validCssSelector")           - returns FIRST matching elem DOM Element
 *  5. document.querySelectorAll("validCssSelector")        - returns ALL matching elems (NodeList)
 * 
 *  !!! DOM ELEMENT MUST BE LOADED !!!
 */


// using getElementsByTagName  - returns an HTML collection, need to pick the first element
// document.getElementsByTagName('p')[0]

// using query selector
let targetParagraph = document.querySelector('p:last-child');
console.log(targetParagraph);

setTimeout(function(){
    targetParagraph.textContent = 'This was changed by JavaScript'
}, 5000);

/*
const imgs = document.getElementsByTagName('img');
const fistImg = imgs[0];
*/

const fistImg = document.querySelector('img');

setTimeout(function(){
    fistImg.src = 'dom-poster.webp'
}, 2000);