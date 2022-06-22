// create function which takes a sorted array and returns the number of uniques values in it

// using hash map ------O(n)
//it would work even if array is unsorted
function countUnique1(a) {
    let count = 0
    let map = {}
    for (let ele of a) {
        map[ele] = (map[ele] || 0) + 1
    }
    for (let key in map) {
        count++
    }
    // if want to print all unique numbers -------
    //let str = ''
    // for(let key in map){
    //     str+= ' '+key
    // }
    // return str
    return count
}

let res = countUnique(a)
console.log(res)


// using multiple pointer


function countUnique2(arr) {
    let i = 0

    for (let j = 1; j < arr.length; j++) {

        if (arr[i] != arr[j]) {
            i++
            arr[i] = arr[j]

        }
    }

    return i + 1
}
