const form = document.querySelector('#msg-form');

const messageInput = document.querySelector('#message-text');
const userDropdown = document.querySelector('#user');

const addMsgBtn = document.querySelector('#add-message-btn');

const messagesLog = document.querySelector('#messages-log');


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    
    if(!userDropdown.value){
        alert('Please specify a user!');
        return;
    }
    
    // checks if there are chars in the message input!
    if(!messageInput.value){
        alert('Please specify a message!');
        return;
    }

    const newMessage = {
        user: userDropdown.value,
        text: messageInput.value
    }

    logNewMessage(newMessage);

    // reset the form
    userDropdown.value = '';
    messageInput.value = '';
});


function logNewMessage(newMessage){
    console.log(newMessage);
    
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');


    msgDiv.innerHTML = `
        <strong>${newMessage.user}: </strong>
        ${newMessage.text.replaceAll('\n','<br>')}`;
    
    messagesLog.append(msgDiv);
}