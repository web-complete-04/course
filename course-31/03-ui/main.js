console.log('UI ready!');

const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIyQHRlc3QuY29tIiwiaWF0IjoxNzcwOTIyMzA1LCJleHAiOjE3NzA5MjU5MDUsInN1YiI6IjIifQ.Few2yXSl8fprHfteq0l1T9haiVDeROkT-ZZgDcvRecM`;

// == RESTful API rules
// GET http://localhost:3000/posts - list all the collection 
// POST http://localhost:3000/posts - add a resource 
// GET http://localhost:3000/posts/2 - list a resource
// PUT http://localhost:3000/posts/2 - updates (full) resource with id 2
// PATCH http://localhost:3000/posts/2 - updates (partial) the resource with id 2
// DELETE http://localhost:3000/posts/2 - deletes the resource with id 2

const baseUrl = `http://localhost:3000`;
const registerApiUrl = `${baseUrl}/register`;
const postsApiUrl = `${baseUrl}/posts`;
const usersApiUrl = `${baseUrl}/users`;

async function getPosts(){
    const response  = await fetch(`${postsApiUrl}/2`);
    const data = await response.json();
    console.log(data);
}


async function updatePost(postId, postData) {
    const response  = await fetch(`${postsApiUrl}/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);
}


async function register(email, password) {
    const response  = await fetch(`${registerApiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });

    const data = await response.json();
    console.log(data.accessToken);
}



async function getUser(){
    const response  = await fetch(`${usersApiUrl}/2`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`    
        }
    });
    const data = await response.json();
    console.log(data);
}


getUser();


// register('user2@test.com', 'user2pass');


//updatePost(3, {title: "updated via API again", views: 124})
// getPosts();