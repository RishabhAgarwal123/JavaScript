// class TwoSum {

//     calculateIndex(data, target) {
//         let res = [];
//         const max = Math.max(...data)
//         const maxIndex = data.indexOf(max);
//         if (data.length > 1) {
//             for (let i = 0; i < data.length; i++) {
//                 if (max + data[i] == target) {
//                     res.push(maxIndex);
//                     res.push(i);
//                 }
//             }
//         } else {
//             return null;
//         }
//         if (res.length == 0) {
//             return null;
//         }
//         if (data.length > 1) {
//             for (let i = 0; i < data.length; i++) {
//                 for (let j = i + 1; j < data.length; j++) {
//                     console.log(data[i] + " " + data[j])
//                     if (data[i] + data[j] == target) {
//                         res.push(i);
//                         res.push(j);
//                         break;
//                     }
//                 }
//             }
//         } else {
//             return null;
//         }
//         if (res.length == 0) {
//             return null;
//         }
//         return res;
//     }
// }

// let result = new TwoSum()
// console.log(result.calculateIndex(input, target));
const input = [1, 9, 7, 3, 2]
const target = 11;

const findTwoIndex = function(nums, target) {
        // if (nums.length > 1) {
        const numsMap = {};
        for (let p = 0; p < nums.length; p++) {
            const currentMap = numsMap[nums[p]];
            console.log(currentMap)
            if (currentMap >= 0) {
                return [currentMap, p];
            } else {
                const numberToFind = target - nums[p];
                numsMap[numberToFind] = p;
            }
            console.log(numsMap);
        }
        return null;
    }
    // return null;
    // }
console.log(findTwoIndex(input, target))

// Numbers
const l1 = [2, 4, 3];
const l2 = [3, 6, 4];

const calculateNum = function(nums) {
    let res = "";
    for (let i = nums.length - 1; i >= 0; i--) {
        res = res + nums[i];
    }
    return res;
};

const calculate = function(l1, l2) {
    const num1 = calculateNum(l1);
    const num2 = calculateNum(l2);
    const result = Number(num1) + Number(num2);
    console.log(result);
}

console.log(calculate(l1, l2));