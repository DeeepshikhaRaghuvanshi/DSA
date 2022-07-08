//Given an integer n, return true if it is a power of two. Otherwise, return false.

function powe(n) {
    if (n == 1 || n == 2)
        return true
    if (Math.sqrt(n) == 2)
        return true
    if (Math.sqrt(n) < 2)
        return false
    return powe(n / 2)
}

let res = powe(0)
console.log(res)