// array rotation by k


let arr = [2, 4, 7, 10, 11, 12, 14]

// reverse an array
function reverse(arr) {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr
}

function rotateArray(arr, k) {


    k = k % arr.length
    arr = reverse(arr)
    arr = reverse(arr.slice(0, k)) + " " + reverse(arr.slice(k, arr.length))
    return arr
}



/***************************************************************without using slice*********************************************************************************/

function rotateArrayNew(arr, k) {
    if (arr.length < 2) return arr;
    function reverse(arr, l = 0, r = arr.length - 1) {
        while (l <= r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
        return arr
    }
    k = k % arr.length
    reverse(arr)
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)
    return arr
}

let res = rotateArray(arr, 1)
console.log(res)