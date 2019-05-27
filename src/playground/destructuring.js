// const person = {
//     name: 'Bill',
//     age: 34,
//     location: {
//         city: 'Sion',
//         temp: 15
//     }
// }

// //console.log(`${person.name} is ${person.age}`)
// const { name: firstName = 'Anonymous', age } = person
// console.log(`${name} is ${age}`)
// const { city, temp: temperature } = person.location
// console.log(`It's ${temperature} degrees in ${city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log( publisherName)

//====================== Array destructuring=================

const address = ['Rue de la Pelouse 15', 'Sion', 'Valais', '1950'];

const [, city = 'Lausanne', canton = 'Vaud'] = address

console.log(`You are in ${city} ${canton}.`)

const item = ['Coffee (cold)', '$2.00', '$3.50', '$2.75']

const [ drink, , mediumPrice ] = item

console.log(`A medium ${drink} costs ${mediumPrice}`)