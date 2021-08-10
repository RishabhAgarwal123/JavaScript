// Select an element from an un sorted sub-array find it's proper place in array and insert them.
const elements = [5, 1, 4, 2, 8];

const sortArray = function (elements) {
    for (let i = 1; i < elements.length; i++) {
        const temp = elements[i];
        let j = i - 1;
        while (j >= 0 && elements[j] > temp) {
            elements[j + 1] = elements[j];
            j--;
        }
        elements[j + 1] = temp;
    }
    return elements;
}

console.log(sortArray(elements));