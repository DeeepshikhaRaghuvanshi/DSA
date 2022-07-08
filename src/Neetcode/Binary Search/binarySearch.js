var search = function (nums, target) {

    let l = 0
    let r = nums.length - 1


    while (l <= r) {
        let mid = Math.round((l + r) / 2)

        if (target < nums[mid])
            r = mid - 1
        else if (target > nums[mid])
            l = mid + 1
        else return mid
    }
    return -1
};