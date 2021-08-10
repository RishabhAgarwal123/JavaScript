const elements = [5, 1, 4, 2, 8];

const merge = function (elements, lower, mid, higher) {
    let i = lower;
    let j = mid + 1;
    let k = higher;
    let sortedArray = [];
    while (i <= mid && j <= higher) {
        if (elements[i] <= elements[j]) sortArray[k] = elements[i];
        else sortArray[k] = elements[j];
        k++;
    }
    if (i > mid) {
        while (j <= higher) {
            sortArray[k] = elements[j];
            j++;
            k++;
        }
    } else {
        while (i <= mid) {
            sortArray[k] = elements[i];
            i++;
            k++;
        }
    }
    for (let h = lower; h <= higher; h++) {
        elements[h] = sortArray[h];
    }
}

const mergeSort = function (elements, lower, higher) {
    if (lower < higher) {
        mid = Math.floor(lower + higher) / 2;
        mergeSort(elements, lower, mid + 1);
        mergeSort(elements, mid - 1, higher);
        merge(elements, lower, mid, higher);
    }
    return elements;
}

console.log(elements, 0, elements.length - 1);