//largest sum of n consecutive digit
// outer loop will run until --->  arr.length - num + 1

let arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8, 2, 45, 2, 1, 8, 7]
let num = 5
function consec(arr, num) {

    if (num < arr.length) {
        let maxSum = -Infinity
        for (let i = 0; i < arr.length - num + 1; i++) {
            let sum = 0
            for (let j = 0; j < num; j++) {
                sum += arr[i + j]
            }
            if (sum > maxSum)
                maxSum = sum
        }
        return maxSum
    }
    else
        console.log("sorry")
}

let res = consec(arr, num)
console.log(res)