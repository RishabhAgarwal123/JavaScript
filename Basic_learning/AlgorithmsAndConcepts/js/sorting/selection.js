// Select first value abd find minimum value from the array and compare that with first value if the found value is less than the first value than swap both
const elements = [5, 1, 4, 2, 8];

const sortArray = function (elements) {
    for (let i = 0; i < elements.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < elements.length; j++) {
            if (elements[j] < elements[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [elements[i], elements[min]] = [elements[min], elements[i]];
        }
    }
    return elements;
}

console.log(sortArray(elements));