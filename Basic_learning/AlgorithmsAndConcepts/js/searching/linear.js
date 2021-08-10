// Linear Search is a simplest algorithm for finding a data in array
'use strict'
const items = [2, 4, 5, 6, 19, 30, 99, 34, 35, 19];

const findAnElement = function(dataSet, element) {
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] === element) {
            return `Element ${element} is found at position ${i}!`
        }
    }
    return 'Elemnt not found!';
}

console.log(findAnElement(items, Number(prompt(`Enter an element to find from ${items}`))));