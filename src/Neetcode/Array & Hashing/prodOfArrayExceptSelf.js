
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