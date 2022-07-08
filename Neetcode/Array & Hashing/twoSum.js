//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    for(let i =0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target)
            return [i,j]
        }
    }
}
   // nums = nums.map(Number).sort(function(a,b){ return a-b})
   
//     let left =0
//     let right = nums.length-1
//     while(left<right){
//         if(nums[left]+nums[right]==target)
//             return [left , right]
//         else if(nums[left]+nums[right]>target)
//             right--
//         else
//             left++
//     }
    // }
    
