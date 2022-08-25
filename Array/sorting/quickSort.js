function pivot(arr, low, high) {
    let pivot = arr[high]
    let i = low
    for (let j = low; j <= high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]]
    return i
}
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = pivot(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
    return arr
}

let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
quickSort(arr)
console.log(arr)