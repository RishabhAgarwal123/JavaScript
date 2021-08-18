'use strict';

// Global Scope
// const firstName = 'Rishabh';

// const calcAge = function (birthYear) {
//     const age = 2021 - birthYear;

//     // Function Scope
//     function printAge() {
//         console.log(`${firstName}, age is ${age}, born on ${birthYear}`);
//     }

//     // Block scope
//     if (age >= 18) {
//         var temp = true;
//         const str = 'Perosn is adult';
//     }

//     console.log(temp);
//     printAge();
// }

// calcAge(1996);

// this keyword
// Normal Function get it's own 'this' keyword that's why we can't call a function direclty (it will be undefined) either we have to call it with objectName.functionName() or we can call by using arrow function because arrow function doesn't get it's 'this' keyword and it's uses teh lexical 'this'.
const obj1 = {
    firstName: 'Rishabh',
    year: 2021,
    calcAge: function () {
        return this.year - 1996;
    },
    age: calcAge(), // this will return a undefined because called driectly
    isAdult: () => year - 1996 >= 18 ? true : false // this will also work 
}
console.log(obj1.calcAge()); // able to get the correct age

// arguments keyword : used when we pass multiple arguments to function and not use all parameters