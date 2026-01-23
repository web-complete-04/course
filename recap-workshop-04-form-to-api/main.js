console.log('FORM & FETCH...');

const apiUrl = `http://demo-api.siit.ro/api`;

const sucessMsg = document.querySelector('#sucess-msg');
const errorMsg = document.querySelector('#error-msg');
const nameFieldError = document.querySelector('#name-error');
const form = document.querySelector('#student-form');

getStudents();


function addStudent(author) {
    sucessMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    // hide all the error messages
    document
        .querySelectorAll('#student-form .error')
        .forEach(errorElem => {
            errorElem.style.display = 'none';
            errorElem.textContent = '';
        });

    fetch(`${apiUrl}/students`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(author)
    })
        .then(response => {
            console.log(response);

            if(response.ok){
                console.log('Request successful!');
                sucessMsg.style.display = 'block';
            }
            else{
                console.log('API reported an error!');
                errorMsg.style.display = 'block';
            }

            return response.json();
        })
        .then(data => {
            if(data.errors){
                console.log('Error from server');
                for(const err in data.errors){
                    console.log(err, data.errors[err][0]);
                    const fieldErrorElem = document.querySelector(`#${err}-error`);
                    console.log(fieldErrorElem);
                    fieldErrorElem.textContent = data.errors[err][0];
                    fieldErrorElem.style.display = 'block';
                }
                return;
            }

            console.log('data can be processed!!');
            console.log(data);
        })
}


function getStudents(){
    fetch(`${apiUrl}/students`)
        .then(response => response.json())
        .then(data => {
            console.log('List of students');
            console.log(data);
        })
}


form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));
    addStudent(formData);
})
