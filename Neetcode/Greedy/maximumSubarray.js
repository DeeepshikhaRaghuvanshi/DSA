//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//A subarray is a contiguous part of an array.

var maxSubArray = function (nums) {
    let max = -Infinity
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum > max)
            max = sum;
        if (sum < 0)
            sum = 0;
    }
    return max;
}
