'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orders: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(`Order Recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} on ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Spread Operator
const newArray = [...restaurant.mainMenu, 'PIZZA'];
// console.log(newArray);
// console.log(...newArray);

// Iterables: Arrays, strings, maps, sets NOT OBJECTs
// const str = 'RISHABH';
// const letters = [...str, 'A', ...'GARWAL'];
// console.log(letters);
// console.log(...letters);

// Destructuring- It's s way of unpacking an array or object into seperate variables or to break down a complex data structure into a smaller data structure.

// restaurant.orderDelivery({ address: 'Awas Vikas' });

// Destructuring Objects- Need to provide the same name as present in object
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// Need to change the names
// const { name: restaurantName, categories: menu, openingHours: hours } = restaurant;
// console.log(restaurantName, menu, hours);

// Nested Objects
// const { thu: { open, close } } = openingHours;
// console.log(open, close);

// Destructuring Arrays
// const arr = [1, 2, 3];
// const [x, y, z] = arr; // it will assign x = 1, y = 2, z = 3

// Recieve values from a function
// const [starter, main] = restaurant.orders(0, 2);
// console.log(starter, main);
// To skip anything that we don't want we just put ,
// Nested Array
// const [i, , [j, k]] = [1, 2, [5, 6]];
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [90, 100];
// console.log(p, q, r);

// Coding Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} Total goals are scored`);
  }
};

const [player1, player2] = game.players;
const [gk1, ...fieldPlayers1] = [...player1];
const [gk2, ...fieldPlayers2] = [...player2];
const allPlayers = [...player2, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, draw, team2 } = { ...game.odds };

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

team1 > team2 && console.log('Team 1 is likely to win');
team1 < team2 && console.log('Team 2 is likely to win');

// Coding Challenge - 2
for (const [index, value] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${value}`)
}

let average = 0;
for (const value of Object.values(game.odds)) {
  average += value;
}
console.log(average / 3);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

let scorers = {};
for (const [index, value] of game.scored.entries()) {
  if (scorers[value] = value)
    scorers[value] = value;
}
console.log(scorers);

// Coding Challenge 3 
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${key}: ${value}`);
}