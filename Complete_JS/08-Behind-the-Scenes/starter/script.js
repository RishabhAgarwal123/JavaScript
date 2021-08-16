'use strict';

// Global Scope
const firstName = 'Rishabh';

const calcAge = function (birthYear) {
    const age = 2021 - birthYear;

    // Function Scope
    function printAge() {
        console.log(`${firstName}, age is ${age}, born on ${birthYear}`);
    }

    // Block scope
    if (age >= 18) {
        var temp = true;
        const str = 'Perosn is adult';
    }

    console.log(temp);
    printAge();
}

calcAge(1996);