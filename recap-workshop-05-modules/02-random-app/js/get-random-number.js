import config from './config.js';

export async function getRandomNumber(requestIndex){
    const response = await fetch(config.apiUrl);
    const data = await response.text();
    return {
        index: requestIndex,
        number: Number(data)
    };
}