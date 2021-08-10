const map = new Map();

map.set('I', 1)
map.set('V', 5)
map.set('X', 10)
map.set('L', 50)
map.set('C', 100)
map.set('D', 500)
map.set('M', 1000)

console.log(map)

const romanToInteger = function(str) {
    let result = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if ((str.charAt(i) === 'I' && str.charAt(i + 1) === 'V') || (str.charAt(i) === 'I' && str.charAt(i + 1) === 'X')) {
    //         result = result + (map.get(str.charAt(i + 1)) - map.get(str.charAt(i)));
    //         i++;
    //     } else if ((str.charAt(i) === 'X' && str.charAt(i + 1) === 'L') || (str.charAt(i) === 'X' && str.charAt(i + 1) === 'C')) {
    //         result = result + (map.get(str.charAt(i + 1)) - map.get(str.charAt(i)));
    //         i++;
    //     } else if ((str.charAt(i) === 'C' && str.charAt(i + 1) === 'D') || (str.charAt(i) === 'C' && str.charAt(i + 1) === 'M')) {
    //         result = result + (map.get(str.charAt(i + 1)) - map.get(str.charAt(i)));
    //         i++;
    //     } else {
    //         result = result + map.get(str.charAt(i));
    //     }
    // }
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) === 'I' && str.charAt(i + 1) === 'V')) {
            result = result + 4;
            i++;
        } else if ((str.charAt(i) === 'I' && str.charAt(i + 1) === 'X')) {
            result = result + 9;
            i++;
        } else if ((str.charAt(i) === 'X' && str.charAt(i + 1) === 'L')) {
            result = result + 40;
            i++;
        } else if ((str.charAt(i) === 'X' && str.charAt(i + 1) === 'C')) {
            result = result + 90;
            i++;
        } else if ((str.charAt(i) === 'C' && str.charAt(i + 1) === 'D')) {
            result = result + 400;
            i++;
        } else if ((str.charAt(i) === 'C' && str.charAt(i + 1) === 'M')) {
            result = result + 900;
            i++;
        } else {
            result = result + map.get(str.charAt(i));
        }
    }
    return result;
}

console.log(romanToInteger("IVX"))