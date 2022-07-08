//1. contains duplicate I : Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {

    let map = {}
    for (let ele of nums) {
        map[ele] = (map[ele] || 0) + 1

        if (map[ele] > 1)
            return true
    }

    return false

};


//2. contains Duplicate II : Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


var containsNearbyDuplicate = function (nums, k) {

    let map = {}
    for (let key in nums) {
        if (map[nums[key]] != undefined) {
            if (Math.abs(key - map[nums[key]]) <= k)
                return true
        }
        map[nums[key]] = key
    }
    return false
};