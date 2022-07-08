// write a function which accepts an array arr and integer n , which would return the maximum sum of n consecutive digits



let arr = [1, 2, 5, 2, 8, 1, 5]
let n = 2
let res = largestSum(arr, n)
console.log(res)

function largestSum(arr, n) {
    let max = -Infinity
    //let arr2 = []

    for (let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0
        //  let arr1 = []

        for (let j = 0; j < n; j++) {
            sum += arr[i + j]
            //     arr1.push(arr[i+j])    // in case you want to return the substring having maximum sum
        }

        if (sum > max) {
            max = sum
            // arr2.push(arr1)              // in case you want to return the substring having maximum sum
        }
    }
    return max
    //return arr2[arr2.length-1]       //in case you want to return the substring having maximum sum
}


// using sliding window

function largestSum(arr, n) {
    let maxSum = 0
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    let tempSum = maxSum
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}