// reverse number


function reverseNumber(num, res = 0) {
    if (num > 0) {
        return reverseNumber(parseInt(num / 10), res * 10 + num % 10)
    }
    return res
}

console.log(reverseNumber(123))
