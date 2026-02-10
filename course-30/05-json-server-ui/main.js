console.log('JSON SERVER UI online...');

const apiUrl = `http://localhost:3000`

// GET Collection
async function getCategories() {
    const response = await fetch(`${apiUrl}/categories`);
    const categories = await response.json();
    console.log(categories);
}

// ADD Category
async function addCategory(categoryName) {
    const response = await fetch(`${apiUrl}/categories`, {
        method: "POST",
        body: JSON.stringify({name: categoryName})
    });
    
    const data = await response.json();
    console.log(data);
}

// ADD Post
async function addPost(postObj) {
    const response = await fetch(`${apiUrl}/posts`, {
        method: "POST",
        body: JSON.stringify(postObj)
    });
    
    const data = await response.json();
    console.log(data);
}

// getCategories();
// addCategory('Religion');

addPost({
    title: "Added by fetch",
    views: 0,
    releaseDate: "2026-02-09"
})