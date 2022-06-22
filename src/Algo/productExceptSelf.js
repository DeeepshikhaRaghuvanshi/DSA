//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//Input: nums = [1,2,3,4] , Output: [24,12,8,6]


// Brute Force : O(n^2)

var productExceptSelf = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let prod = 1
        for (let j = 0; j < nums.length; j++) {

            if (i != j) prod *= nums[j]

        }
        arr.push(prod)
    }
    return arr
};


// optimized approach - O(n)

var productExceptSelf = function (nums) {
    let leftArr = []
    let rightArr = []
    let result = []
    rightArr[0] = 1
    leftArr[0] = 1
    let prod1 = 1
    let prod = 1
    for (let i = 1; i < nums.length; i++) {
        prod *= nums[i - 1]
        leftArr.push(prod)
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        prod1 *= nums[i + 1]
        rightArr.unshift(prod1)
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(leftArr[i] * rightArr[i])
    }
    return result
};

// Reduced code

var productExceptSelf = function (nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j = 0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};