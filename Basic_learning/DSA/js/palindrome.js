const reverse = function(n) {
    let reversed = 0;
    while (n != 0) {
        let remain = n % 10;
        reversed = reversed * 10 + remain;
        n = parseInt(n / 10);
    }
    return reversed;
}

const palindrome = function(n) {
    if (n >= 0) {
        const result = reverse(n);
        if (result >= -2147483648 && result <= 2147483647) {
            if (result === n)
                return true;
        }
    }
    return false;
}

console.log(palindrome(-121))