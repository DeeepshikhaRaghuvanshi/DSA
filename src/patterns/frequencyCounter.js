// Write a function same which accepts two number arrays and check if the square of every element of array1 present in array2 or not. (order can differ)
// example : arr1 = [1,2,3,4] , arr2 = [4,9,1,16] ------- true
// arr1 = [1,2,3,2] , arr2 = [4,9,4,1] ------- true
// arr1 = [1,2,3,2] , arr2 = [16,9,4,1] ------- false


//Brute force ----O(n^2)

function same(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false
    for (let i = 0; i < arr1.length; i++) {
        let c = arr2.indexOf(arr1[i] ** 2)
        console.log(c)
        if (c == -1)
            return false
        arr2.splice(c, 1)
    }
    return true
}

// using map or frquency counter

function sameNew(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false
    let map1 = {}  //map for arr1
    let map2 = {}   //map for arr2

    console.log(map1)
    console.log(map2)

    for (let ele of arr1) {
        map1[ele] = ((map1[ele]) || 0) + 1       // if element not present add its value as 0 otherwise add 1 to it
    }
    for (let ele of arr2) {
        map2[ele] = ((map2[ele]) || 0) + 1
    }

    console.log(map1)
    console.log(map2)

    for (let ele in map1) {
        if (!(ele ** 2 in map2))   // check if ele**2 present
            return false
        if (map2[ele ** 2] != map1[ele])   // check if ele**2 is have the same frquency as ele or not
            return false
    }

    return true

}

let arr1 = [1, 2, 3, 4]
let arr2 = [4, 9, 16, 1]
let res = sameNew(arr1, arr2)
console.log(res)
