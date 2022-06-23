


let arr = [3, 5, 1, 2, 7, 9, 0, 6, 11]
let n = arr.length

let i = 1;
while (i < n) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0) {
        if (arr[j] > temp) {
            arr[j + 1] = arr[j];
        }
        else {
            break;
        }
        j--;
    }
    i++;
    arr[j + 1] = temp;
}

console.log(arr) 