console.log('Chuck Norris categories');


getCategories(displayCategoriesAsSections);


function displayCategoriesAsSections(categories){
    const parentElem = document.querySelector('#categories-container');

    categories.forEach(categoryName => {
        const section = document.createElement('section');
        parentElem.append(section);

        const heading = document.createElement('h3');
        heading.textContent = categoryName;
        section.append(heading);
    })
}


/*
getCategories()
    .then(category => displayCategoriesAsSections(category))


const categories = await getCategories();
displayCategoriesAsSections(categories);
*/