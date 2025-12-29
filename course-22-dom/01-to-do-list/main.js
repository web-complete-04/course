console.log('Implementing the to do list!');

const textBox = document.querySelector('#new-item');
const addButton = document.querySelector('#add-btn');
const toDoList = document.querySelector('#to-do-list');

addButton.addEventListener('click', function(){
    // check if the textbox has any characters
    if(!textBox.value){
        alert('Please specify a task!')
        return; 
    }
    
    // update the list
    // toDoList.innerHTML += `<li>${textBox.value} <span class="delete">delete</span></li>`;

    // create the li elem
    const liElem = document.createElement('li');
    toDoList.append(liElem);

    // create & add the text node
    const textNode = document.createTextNode(textBox.value);
    liElem.append(textNode);

    // create & add the delete span element
    const deleteElem = document.createElement('span');
    deleteElem.classList.add('delete');
    deleteElem.textContent = 'delete item';
    liElem.append(deleteElem);

    deleteElem.addEventListener('click', function(event){
        if(!confirm('Are you sure you want to delete this item?')){
            return;
        }

        const clickedElem = event.target;
        clickedElem.parentNode.remove();
    })

    // clear the textbox
    textBox.value = '';
})