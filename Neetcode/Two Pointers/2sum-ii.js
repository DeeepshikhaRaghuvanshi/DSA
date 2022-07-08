/* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

*/

var twoSum = function (numbers, target) {
    // using two poiner approach
    let l = 0
    let r = numbers.length - 1

    while (l <= r) {

        if ((numbers[r] + numbers[l]) == target)
            return [l + 1, r + 1]
        if ((numbers[r] + numbers[l]) > target)
            r--
        else
            l++

    }

    //----------------------------- using map object-----


    //     let map = {}
    //     let res = []
    //     for(let i=0;i<numbers.length;i++){
    //         if(map[target-numbers[i]]==undefined)
    //             map[numbers[i]]=i
    //         else{
    //            res.push( map[target-numbers[i]]+1)  
    //             res.push(i+1)
    //         }
    //     }

    //     return res
};