console.log(location.hash);

let displayComponentSelector;
switch (location.hash) {
    case '#about':
        displayComponentSelector = '#about-component'
        break;

    case '#services':
        displayComponentSelector = '#services-component'
        break;

    default:
        displayComponentSelector = '#welcome-component'
        break;
}

document.querySelector(displayComponentSelector).classList.remove('hidden');