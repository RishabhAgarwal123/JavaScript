const reverse = function(x) {
    let num = x;
    let result = 0;
    x = x + ""
    result = parseInt(x.split("").reverse().join(""))
    if (result >= -2147483648 && result <= 2147483647) {
        if (num < 0) {
            return "-" + result;
        } else {
            return result;
        }
    }
    return 0;
}

console.log(reverse(-123))