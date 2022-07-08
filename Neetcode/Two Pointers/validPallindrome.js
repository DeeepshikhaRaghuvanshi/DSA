//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

function validPallindrome(s, l, r) {
    if (l >= r)
        return true
    if (s[l] != s[r])
        return false
    return isPallindrome(s, l + 1, r - 1)
}

var isPalindrome = function (s) {

    s = s.split(' ').join('').toLowerCase().replace(/[^a-z0-9 ]/gi, '')

    let l = 0
    let r = s.length - 1

    let res = validPallindrome(s, l, r)
    return res
};