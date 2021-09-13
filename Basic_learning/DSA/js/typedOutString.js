'use strict'
const S = 'az#z';
const T = 'az#z';

const modify = (str) => {
    // str = str.toLowerCase().split('');
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === '#') {
    //         str.splice(i, 1);
    //         str.splice(i - 1, 1);
    //     }
    // }
    // return str.join();
    str = str.toLowerCase().split('');
    const res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            res.push(str[i]);
        } else {
            res.pop();
        }
    }
    return res;
}

const typedString = (s1, s2) => {
    // const res1 = modify(s1);
    // const res2 = modify(s2);
    // if (res1 === res2) {
    //     return true;
    // } else {
    //     return false;
    // }
    const findS = modify(s1);
    const findT = modify(s2);
    if (findS.length !== findT.length) {
        return false;
    } else {
        for (let i = 0; i < findS.length; i++) {
            if (findS[i] !== findT[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(typedString(S, T));
const backspaceCompare = function (s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if (s[p1] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
            if (t[p2] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p2--;
                    backCount--;
                    if (t[p2] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
        } else {
            if (s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}
console.log(backspaceCompare(S, T));