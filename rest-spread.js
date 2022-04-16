
const numbers = [1, 2, 3, 4, 5, 6];

const [head, ...tail] = numbers;
console.log(head);
console.log(...tail);

function showHobbies(hobbies = '') {
    return hobbies;
}

function showRestOfInfo(theRestOfTheThings = '') {
    return theRestOfTheThings;
}

function showUserInfo({ name, occupation, hobbies, ...theRestOfTheThings }) {
    console.log(`
        <h1>${name}</h1>
        <p>${occupation}</p>
        <div>${showHobbies()}</div>
        <div>${showRestOfInfo()}</div>
    `);
}

showUserInfo({
    name: 'Brian',
    occupation: 'Software engineer',
    hobbies: ['eating', 'climbing', 'reading'],
    resume: [
        {startDate: '', endDate: '', title: '...'}
    ],
    allergies: [],
})