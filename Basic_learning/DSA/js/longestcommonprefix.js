const strs = ["flowers","flow","flight"];

const minimun = function(strs) {
    let result = "";
    let maxLength = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > maxLength) {
            maxLength = strs[i].length;
        } else {
            result = strs[i];
        }
    }
    return result;
}

const calculateCommonPrefix = function(strs) {
    let size = strs.length;
    if (size == 0)
        return "";
   
    if (size == 1)
           return strs[0];
   
    strs.sort();

    let end = Math.min(strs[0].length, strs[size-1].length);
    let i = 0;
    while (i < end && strs[0][i] == strs[size-1][i] )
        i++;
    let pre = strs[0].substring(0, i);
    return pre;
}

console.log(calculateCommonPrefix(strs));