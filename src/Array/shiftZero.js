// shift zero to the right and keep other elements in same order

let arr = [1, 0, 3, 0, 0, 2, 5]
// o/p- [1,3,2,0,0,0]

let i = 0
let j = 0

while (j < arr.length) {
    if (arr[j] != 0) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        i++

    }
    j++
}
console.log(arr)