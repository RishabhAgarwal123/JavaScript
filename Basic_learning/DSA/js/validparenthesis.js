const inputs = "()[]{}";

const isValid = function (s) {
    if (s.length % 2 != 0) return false;
    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) stack.push(map.get(s[i]));
        else if (s[i] != stack.pop()) return false;
    }
    // const obj = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // }
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === '(') stack.push(obj["("]);
    //     else if (s[i] === '{') stack.push(obj["}"]);
    //     else if (s[i] === '[') stack.push(obj["]"]);
    //     else if (stack.length != 0) {
    //         if (s[i] != stack.pop) {
    //             return false;
    //         }
    //     }
    // }
    return stack.length === 0;
}

console.log(isValid(inputs));