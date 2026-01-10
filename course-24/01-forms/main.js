const form = document.querySelector('#msg-form');

const addMsgBtn = document.querySelector('#add-message-btn');

const messagesLog = document.querySelector('#messages-log');


form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e);

    const formData = new FormData(form); 

    // CREATES THE MESSAGE OBJECT USING Object.fromEntries() method
    const newMessage = Object.fromEntries(formData);
    

    /*
    // CREATES THE MESSAGE OBJECT BY ITERATION OF formData.entries()
    const newMessage = {};
    for (const pair of formData.entries()) {
        // const newProperty = pair[0];
        // newMessage[newProperty] = pair[1];
        newMessage[pair[0]] = pair[1];
        console.log(pair);
    }
    */

    // TODO: Should validate form inputs
    logNewMessage(newMessage);

    // TODO: reset the form
});


function logNewMessage(newMessage){
    console.log(newMessage);
    
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');

    msgDiv.innerHTML = `
        <div>
            <strong>${newMessage.user}</strong> (${newMessage.email}): 
        </div>
        ${newMessage.message.replaceAll('\n','<br>')}`;
    
    messagesLog.append(msgDiv);
}