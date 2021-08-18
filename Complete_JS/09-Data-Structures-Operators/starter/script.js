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
    console.log(`Order Recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} on ${time}`);
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
console.log(newArray);
console.log(...newArray);

// Iterables: Arrays, strings, maps, sets NOT OBJECTs
const str = 'RISHABH';
const letters = [...str, 'A', ...'GARWAL'];
console.log(letters);
console.log(...letters);

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