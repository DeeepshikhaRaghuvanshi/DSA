//STRING ANAGRAM PROBLEM
//If 2 strings are anagram or not
// conditons : 1. length should be same , 2. number of letter should be same , arrangement can be different


let obj = {}
function isAnagram(str1, str2) {

    if (str1.length != str2.length)
        return false
    for (let letter of str1) {
        obj[letter] = (obj[letter] || 0) + 1
    }

    for (let lett of str2) {
        if (!obj[lett])
            return false
        else
            obj[lett]--
    }
    return true
}
let res = isAnagram('hello', 'lleho')
console.log(res)