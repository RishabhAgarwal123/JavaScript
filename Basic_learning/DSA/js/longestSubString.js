const str = 'abcdcaba';

// const lengthOfLongestSubstring = function (s) {
//     if (s.length <= 1) return s.length;
//     let longestString = 0;
//     for (let i = 0; i < s.length; i++) {
//         let charVisited = {};
//         let currentLength = 0;
//         for (let j = i; j < s.length; j++) {
//             const currentChar = s[j];
//             if (!charVisited[currentChar]) {
//                 currentLength++;
//                 charVisited[currentChar] = true;
//                 longestString = Math.max(longestString, currentLength);
//             } else {
//                 break;
//             }
//         }
//     }
//     return longestString;
// };

const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;
    let longestString = 0, left = 0;
    const charVisited = new Map();
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevChar = charVisited.get(currentChar);
        console.log(charVisited)
        if (prevChar >= left) {
            left = prevChar + 1;
        }
        charVisited.set(currentChar, right);
        longestString = Math.max(longestString, right - left + 1);
    }
    return longestString;
};

console.log(lengthOfLongestSubstring(str));

const lengthOfLongestSubstring1 = (s) => {
    if (s.length <= 1) return s.length;
    let longest = 0, left = 0;
    const charsSeen = new Map();
    for (let right = 0; right < s.length; right++) {
        const currentElement = s[right];
        let prev = charsSeen.get(currentElement);
        if (prev >= left) {
            prev = prev + 1;
        }
        charsSeen.set(currentElement, right);
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}
console.log(lengthOfLongestSubstring1('abdefghasvc'));