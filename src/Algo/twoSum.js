//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// arr = [2,1,5,3]  , target = 6 , o/p - [1,2]

//Brute approach - O(n^2)

function twoSumBrute(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target)
                return [i, j]
        }
    }
}


// solution using hashmap - O(n)

function twoSum(arr, target) {
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        n = arr[i]
        if (hashMap[target - n] != undefined)
            return [hashMap[target - n], i]
        hashMap[n] = i
    }
    return []
}


