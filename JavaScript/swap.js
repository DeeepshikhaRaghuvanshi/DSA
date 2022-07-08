let z
var a = 30, b = 20

function swap(a, b) {
    var temp
    temp = a
    a = b
    b = temp
    return { a, b }
}

var { b, a } = swap(a, b)
console.log(a)
console.log(b)