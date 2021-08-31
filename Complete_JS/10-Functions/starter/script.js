'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers, price = 25000 * numPassengers) {
    // ES 5
    // numPassengers = numPassengers || 1;
    // price = price || 25000;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    // console.log(booking);
    bookings.push(booking);
}

createBooking('LH123', 5);

const flight = 'LS123';
const passenger = {
    name: 'Rishabh',
    passport: 243123321
}

const checkIn = function (flight, passenger) {

}

checkIn(flight, passenger);

// Higher Order Function
const greet = (greetings) => {
    // return (name) => console.log(`${greetings} ${name}`);
    return function (name) {
        console.log(`${greetings} ${name}`);
    }
}

// Higher Order using arrow function
const greetArr = greets => name => console.log(`${greets} ${name}`);

// greet('Hello')('Rishabh');
// greetArr('Hello')('Rishabh');

// Call and bind
const vistara = {
    airline: 'Vistara',
    iataCode: 'VH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} is booked on flight ${this.airline}`);
    }
}

// vistara.book(12342, 'Rishabh');

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option.This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object.The
// method does 2 things:
// 1.1.Display a prompt window for the user to input the number of the
// selected option.The prompt should look like this:
// What is your favourite programming language ?
// 0 : JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.Based on the input number, update the 'answers' array property.For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense(e.g.answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results.The
// method takes a string as an input(called 'type'), which can be either 'string'
// or 'array'.If type is 'array', simply display the results array as it is, using
// console.log().This should be the default option.If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data.Use both the 'array' and the 'string' option.Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation ?

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const language = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n(Write Option Number) `));

        // Register Answer
        typeof language === 'number' && language <= this.answers.length && this.answers[language]++;
        // console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') console.log(this.answers);
        else if (type === 'string') console.log(`Polls results are ${this.answers.join(', ')}`);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// Closures 
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking(); // After this secureBooking is removed from execution context because it's completed the functionality
booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
    const a = 100;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 999;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
// Re-assign 
h();
f();
console.dir(f);

// Example 2
const boardPassenger = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(() => {
        console.log(`We are boarding all passengers ${n}`);
        console.log(`There are 3 groups with ${perGroup} passengers`);
    }, wait * 1000); // Performed after wait is completed
    console.log(`We are boarding all passengers in ${wait} seconds`); // Performed at a time
}

boardPassenger(90, 3);

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();