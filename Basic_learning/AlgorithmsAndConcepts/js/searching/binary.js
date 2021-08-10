// Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
'use strict'
const items = [2, 4, 5, 6, 19, 30, 99, 34, 35];

const findAnElement = function (items, element) {
    let lower = 0;
    let high = items.length - 1;
    items.sort(function (a, b) { return a - b });
    while (lower <= high) {
        let mid = Math.floor(lower + (high - lower) / 2);
        console.log(mid);
        if (items[mid] === element) return `Element ${element} is found at position ${mid}!`
        if (items[mid] < element) lower = mid + 1;
        if (items[mid] > element) high = mid - 1;
    }
    return items;
}

console.log(findAnElement(items, 99));