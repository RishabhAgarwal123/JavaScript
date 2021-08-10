// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arr = [17, 21, 23];

const printForecast = function(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result = result + `...${arr[i]}C in ${i + 1} days `
    }
    console.log(`${result}...`);
}
printForecast(arr);