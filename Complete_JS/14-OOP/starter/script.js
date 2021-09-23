'use strict';
// How it works
// 1. new keyword will create a empty object {}
// 2. function is called with 'this' keyword as {}
// 3. {} linked to a prototype
// 4. function automatically returns {}

const Person = function (firstName, age) {
    // Instance propeties
    this.firstName = firstName; // Creating a new property in this with firstName and age
    this.age = age;
}
const rishabh = new Person('Rishabh', 25);
const rishi = new Person('Rishi', 20);
console.log(rishabh);
console.log(rishi);

// Prototypes: Add a method to Person using prototype
// Below calcBirthyear will be added to the person constructor using prototype
Person.prototype.calcBirthYear = function () {
    return new Date().getFullYear() - this.age;
}

console.log(`Birth year ${rishabh.firstName} is : ${rishabh.calcBirthYear()}`);
console.log(`Birth year ${rishi.firstName} is : ${rishi.calcBirthYear()}`);
console.log(rishabh.__proto__);
// Object . prototype (Top of prototype chain)
console.log(rishabh.__proto__.__proto__);
console.log(rishabh.__proto__.__proto__.__proto__);// null
console.log(Array.prototype);

// To use a function on eveery array method
const arr = [1, 2, 4, 3, 1, 3, 1, 4, 5, 6, 7, 3];
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique(arr));
// Coding Challenge 1
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    return this.speed += 10;
}
Car.prototype.brake = function () {
    return this.speed -= 5;
}
const BMW = new Car('BMW', 120);
console.log(`Current speed of ${BMW.make} is :: ${BMW.accelerate()}km/hr`);
console.log(`Current speed of ${BMW.make} is :: ${BMW.accelerate()}km/hr`);
console.log(`Current speed of ${BMW.make} is :: ${BMW.accelerate()}km/hr`);
console.log(`Current speed of ${BMW.make} is :: ${BMW.brake()}km/hr`);
console.log(`Current speed of ${BMW.make} is :: ${BMW.brake()}km/hr`);
console.log(`Current speed of ${BMW.make} is :: ${BMW.brake()}km/hr`);

// Using ES6 classes
// Class Expressions
// const PersonClass = class {
// }

// Class Declaration
class PersonClass {
    constructor(firstName, dob) {
        this.firstName = firstName;
        this.dob = dob;
    }
    // Methods will be added to the .prototype property
    calculateAge(year) {
        console.log(`${this.firstName} age is ${year - this.dob}`);
    }

    get age() {
        return 2021 - this.dob;
    }

    set age(age) {
        console.log(age);
    }
}

const person = new PersonClass('Harvey', 1985);
person.calculateAge(2021);
console.log(person.age);
person.set = 50;

// Classes are not hoisted
// Classes are first class citizen
// Classes are executed in strict mode

class Account {
    // Public Properties
    language = navigator.language;

    // Private Properties
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected properties
        // this._movements = [];
        // this._pin = pin;
        this.#pin = pin;
    }

    // Public Interfaces
    getMMovements() {
        return this._movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.#movements.push(-val);
    }

    printDetails() {
        console.log(`The owner of this account is ${this.owner} and statement is ${this.#movements}`);
    }
}

const account = new Account('Rishabh', 'Indian', 1111);
account.deposit(10000);
account.deposit(10000);
account.deposit(10000);
account.withdraw(10000);
account.printDetails();