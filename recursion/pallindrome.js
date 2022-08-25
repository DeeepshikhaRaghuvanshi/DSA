//there are 2 ways to check if string is pallindrome or not 
//1. reverse string and compare with the original string
//2. using recursion :  keep comparing outermost alphabets on both of the sides , if same keep moving inward and if not return 


//2. using recursion
function isPallindrome(s, l, m) {
    if (l >= m)
        return true
    if (s[l] != s[m])
        return false
    return isPallindrome(s, l + 1, m - 1)
}

let str = "racecar"
let m = str.length - 1
let a = isPallindrome(str, 0, m)
console.log(a)

