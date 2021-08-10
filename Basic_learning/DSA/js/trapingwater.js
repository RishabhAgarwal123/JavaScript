const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const maximumLeft = function(height) {
    return(Math.max(...height));
}

const maximumRight = function(height) {
    return(Math.max(...height));
}

const maximumUnits = function (height) {
    let result = 0;
    for (let i = 1; i < height.length - 1; i++) {
        const [leftArray, rightArray] = [height.slice(0, i), height.slice(i + 1, height.length)];
        const maxLeft = maximumLeft(leftArray);
        const maxRight = maximumRight(rightArray);
        const minimum = Math.min(maxLeft, maxRight) - height[i];
        if (minimum > 0) {
            result += minimum;
        }
    }
    return result;
}

console.log(maximumUnits(height));