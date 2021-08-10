// Compare set of items and swap them if one is small than other.
const elements = [5, 1, 4, 2, 8];


const sortArray = function(elements) {
    for (let i = 0; i < elements.length - 1; i++) {
        let swap = 0;
        for (let j = 0; j < elements.length - 1 - i; j++) {
            if (elements[j] > elements[j + 1]) {
                [elements[j], elements[j + 1]] = [elements[j + 1], elements[j]];
                swap = 1;
            }
        }
        if (swap === 0) break;
    }
    return elements;
}

console.log(sortArray(elements));