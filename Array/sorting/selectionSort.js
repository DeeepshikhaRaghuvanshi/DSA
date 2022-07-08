// brute force ----------> find minimum in array and place it at the right position
// rounds----> for i=0 and sarch min in array ahead of it ! same with every other round , keep shifting i and search min element ahead of it

let arr = [1, 7, 9, 2, 3, 0, 5, 8]

for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
     // find min in array ahead
        if (arr[j] < arr[min])
            min = j
    }
    // swap 
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
}

console.log(arr)