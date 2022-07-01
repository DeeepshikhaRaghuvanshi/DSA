//Given an array of length N consisting of only 0s and 1s in random order. Modify the array to segregate 0s on left side and 1s on the right side of the array.
//N = 5 arr[] = {0, 0, 1, 1, 0} Output: 0 0 0 1 1

segregate0and1(arr, n){

    let l = 0
    let r = n - 1
    while (l < r) {
        while (arr[l] == 0 && l < r) {
            l++
        }
        while (arr[r] == 1 && l < r) {
            r--
        }

        [arr[l], arr[r]] = [arr[r], arr[l]]
    }

}