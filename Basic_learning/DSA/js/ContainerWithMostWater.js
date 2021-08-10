const container_list = [3, 4, 6, 8, 9];

const minimun = function(a, b) {
    let min = 0;
    if (a < b) {
        min = a;
    } else {
        min = b;
    }
    return min;
}

const maximumArea = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 0; j < height.length; j++) {
            area = minimun(height[i], height[j]) * (j - i);
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
}

console.log(maximumArea(container_list));

const conatinerWithMaximumArea = function(heights) {
    let maximumArea = 0,
        startPointer = 0,
        endPointer = heights.length - 1;
    while (startPointer < endPointer) {
        const height = Math.min(heights[startPointer], heights[endPointer]);
        const width = endPointer - startPointer;
        const area = height * width;
        // console.log({ startPointer, endPointer, height, width, area });
        maximumArea = Math.max(area, maximumArea);
        if (heights[startPointer] <= heights[endPointer]) {
            startPointer++;
        } else {
            endPointer--;
        }
    }
    return maximumArea;
}

console.log(conatinerWithMaximumArea(container_list))