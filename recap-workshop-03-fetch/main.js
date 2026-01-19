console.log('Rick & Morty API Example');

const caracterCardsContainer = document.querySelector('#characters-container');


fetch('https://rickandmortyapi.com/api/character?page=3')
    .then(response => response.json())
    .then(data => {
        console.log('Response received!');

        // draw cards
        data.results.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('card','m-2');
            characterCard.style.width = '18rem';
            caracterCardsContainer.append(characterCard);

            const cardImg = document.createElement('img');
            cardImg.src = character.image;
            cardImg.alt = `Picture of ${character.name}`;
            cardImg.classList.add('card-img-top');
            characterCard.append(cardImg);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            characterCard.append(cardBody);

            const cardTitle = document.createElement('h2');
            cardTitle.textContent = character.name;
            cardBody.append(cardTitle);

            const statusSpan = document.createElement('span');
            const statusSpanClasses = ['badge'];
            switch (character.status) {
                case 'Alive':
                    statusSpanClasses.push('text-bg-success');
                    break;

                case 'Dead':
                    statusSpanClasses.push('text-bg-danger');
                    break;
            
                default:
                    statusSpanClasses.push('text-bg-secondary');    
                    break;
            }
            statusSpan.classList.add(...statusSpanClasses);
            statusSpan.textContent = character.status;
            cardBody.append(statusSpan);

            const detailsBtn = document.createElement('a')
            detailsBtn.classList.add('btn', 'btn-primary', 'd-block', 'mt-3');
            detailsBtn.textContent = 'Details';
            detailsBtn.href = '#';
            detailsBtn.dataset.characterId = character.id;
            cardBody.append(detailsBtn);
        });

        // add event listeners after creating the cards
        console.log('Should implement add event listener on buttons!');
        const buttons = caracterCardsContainer.querySelectorAll('a.btn');
        buttons.forEach(btn => btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(e.target);
            console.log(`Button with id ${e.target.dataset.characterId} was clicked!`);
        }));
    });


console.log('main.js code from stack was executed!');