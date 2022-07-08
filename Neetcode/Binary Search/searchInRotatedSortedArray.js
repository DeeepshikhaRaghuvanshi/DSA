var search = function(nums, target) {
    
    let l = 0, r = nums.length - 1;
     while(l<r){
         let mid =~~((l+r)/2);
         if(nums[mid]===target) return mid;
 
         if(nums[mid]>nums[l]){
 
             if(target>=nums[l] && target<nums[mid])
                 r = mid-1;
             else 
                 l = mid+1;
         }
 
         else if(nums[mid]<nums[r]){
 
             if(target>nums[mid] && target<=nums[r])
                 l = mid+1;
             else 
                 r = mid-1;
                 
         }
 
         else break;
     }
     return nums[r]===target?r:-1;
 };
 
 