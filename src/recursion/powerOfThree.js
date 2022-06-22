//Given an integer n, return true if it is a power of three. Otherwise, return false
//Input: n = 27 ,Output: true


// using recusion (my approach)
var isPowerOfThree = function (n) {
    if (n == 0)
        return false
    if (n == 1)
        return true
    if (n % 3 != 0)
        return false

    return isPowerOfThree(n / 3)
    return true
};

// using while loop (faster approach)

function isPowerOfThree(n) {
    if (n < 1) {
        return false;
    }
    while (n % 3 == 0) {
        n /= 3;
    }
    return n == 1;
}