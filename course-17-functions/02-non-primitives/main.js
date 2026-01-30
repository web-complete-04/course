console.log('In JS Arrays and Object are special!');

const collection = [`🍎`,`🍍`,`🍉`];
const copyCollection = collection;
// collection and copyCollection are pointing to the same HEAP Memory Address 


const collectionBackup = [...collection];

// this is safe because the memory address remains unchanged in the collection constant
collection.push(`🍇`, `🍌`);

// this would modify the save memory address - it's not allowed!
// collection = [];


const pers = {
    name: 'Adi',
    location: 'BV'
}

const copyPers = pers;
const persBackup = {...pers};

pers.name = 'Adrian';
