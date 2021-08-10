// Select any element as a PIVOT element. If array length is even (Select first or last element as a pivot) if array length is odd than select mid element as pivot.

const elements = [5, 1, 4, 2, 8];

const partition = function (element, lower, higher) { // lower = 0, higher = 4
    const pivot = elements[lower]; // 5
    let start = lower; // 0
    let end = higher; // 4
    while (start < end) {
        while (elements[start] <= pivot) { 
            start++; // 3
        }
        while (elements[end] > pivot) {
            end--; // 
        }
        if (start < end) {
            [element[start], elements[end]] = [elements[end], elements[start]];
        }
    }
    [elements[lower], elements[end]] = [elements[end], elements[lower]];
    return end;
}

const quickSort = function (elements, lower, higher) {// lower = 0, higher = 4
    if (lower < higher) {
        const middle = partition(elements, lower, higher); // 
        quickSort(elements, lower, middle - 1);
        quickSort(elements, middle + 1, higher);
    }
    return elements;
}

console.log(quickSort(elements, 0, elements.length - 1));