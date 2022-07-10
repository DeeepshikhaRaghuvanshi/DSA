// flatten a nested array using recursion


let arr = [[[[[1]]]], 2, 4, 5, [[[4, 5, 67, 8]]], 445, 56];
let resArr = [];

const recur = (array, i) => {
    if (i == array.length) {
        return;
    }
    !Array.isArray(array[i]) ? resArr.push(array[i]) : recur(array[i], 0);
    recur(array, ++i);
};
recur(arr, 0);

console.log(resArr);


