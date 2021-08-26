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
    console.log(booking);
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