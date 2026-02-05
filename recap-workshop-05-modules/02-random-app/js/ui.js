export function cardFactory(parentElem, cardData){
    const container = document.createElement('div');
    container.classList.add('card');
    container.textContent = cardData.number;

    const sub = document.createElement('sub');
    sub.textContent = cardData.index;
    container.append(sub);

    parentElem.append(container);
}


export function advancedCardFactory(parentElem, cardData){
    const container = document.createElement('div');
    container.classList.add('advanced-card');
    container.textContent = cardData.number;

    const title = document.createElement('h2');
    title.textContent = cardData.index;
    container.append(title);

    parentElem.append(container);
}