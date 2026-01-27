function drawCategoriesAsDropdown(categories){
    const parentElem = document.querySelector('#categories-container');

    const dropdown = document.createElement('select');
    parentElem.append(dropdown);
    categories.forEach(categoryName => {
        const option = document.createElement('option');
        option.value = categoryName;
        option.textContent = categoryName;
        dropdown.append(option)
    });
}


function drawCategoriesAsList(categories){
    const parentElem = document.querySelector('#categories-container');

    const list = document.createElement('ol');
    parentElem.append(list);
    categories.forEach(categoryName => {
        const listItem = document.createElement('li');
        listItem.textContent = categoryName;
        list.append(listItem);
    }); 
}


async function getCategories(callbackFn) {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;

    try {
        const response = await fetch(apiUrl);
        const categories = await response.json();
        callbackFn(categories);
    } catch (error) {
        console.error(error);
    }
}