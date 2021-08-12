const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// const maximum = function(height) {
//     return(Math.max(...height));
// }

const calculate = function(pointerValue, currentHeight) {
    return pointerValue - currentHeight;
}

const maximumUnits = function (height) {
    // let result = 0;
    // for (let i = 1; i < height.length - 1; i++) {
    // const maxLeft = maximum(height.slice(0, i));
    // const maxRight = maximum(height.slice(i + 1, height.length));
    // const minimum = Math.min(maxLeft, maxRight) - height[i];
    // if (minimum > 0) {
    //     result += minimum;
    // }
    // let leftPointer = i, rightPointer = i, maxLeft = 0, maxRight = 0;
    // while (leftPointer >= 0) {
    //     maxLeft = Math.max(maxLeft, height[leftPointer]);
    //     leftPointer--;
    // }

    // while (rightPointer < height.length) {
    //     maxRight = Math.max(maxRight, height[rightPointer]);
    //     rightPointer++;
    // }

    // const min = Math.min(maxLeft, maxRight) - height[i]; 

    // if (min > 0) {
    //     result += min;
    // }
// }
    // return result;

    //Optimzed Solution

    let totalWater = 0, left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += calculate( maxLeft, height[left]);
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += calculate(maxRight, height[right]);
            }
            right--;
        }
    }
    return totalWater;
}

console.log(maximumUnits(height));