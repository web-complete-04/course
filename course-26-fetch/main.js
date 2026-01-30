console.log('CRUD implemenation via fetch');

const apiUrl = `http://demo-api.siit.ro/api`;

/*
 *   POST - CREATE
 */
/*
fetch(`${apiUrl}/authors`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({name: 'Ion Popa Popas'})
})
.then(response => response.json())
.then(data => console.log(data))
*/

/**
 * PUT - UPDATE
 */
fetch(`${apiUrl}/authors`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({ name: "Ion Popa Popas updated" })
})
    .then(response => response.json())
    .then(data => console.log(data));

/**
 * DELETE - DELETE
 */
/*
fetch(`${apiUrl}/authors/87`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data));
*/


/**
 * GET - READ (entire collection)
 */
fetch(`${apiUrl}/authors`)
    .then(response => response.json())
    .then(data => console.log(data));


/**
 * GET - READ (single resource)
 */
/*
fetch(`${apiUrl}/authors/87`)
.then(response => response.json())
.then(data => console.log(data));
*/