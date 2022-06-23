
// compare with neighbourhood ele and swap if required
// i-th round will sort i-th largest element (place it to its right position - e.g largest to last and 2nd larget to 2nd last) 
// hence we keep shrinking the testing array with every round
let arr = [3, 5, 1, 2, 7, 9, 0, 6]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            //swap
            let temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)