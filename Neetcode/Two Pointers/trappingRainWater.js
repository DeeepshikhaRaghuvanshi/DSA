var trap = function (height) {
    if (height == null || height.length === 0) return 0;

    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let res = 0;

    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }

        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }

        height[l] < height[r] ? l++ : r--;
    }

    return res;



    //      let left = [0]
    //      let right = [0]
    //      let res = []

    //      let max=0
    //      for(let i=1;i<height.length;i++){
    //          max = Math.max(max,height[i-1])
    //          left.push(max)
    //      }
    //     let max2 = 0
    //     for(let i=height.length;i>1;i--){
    //         max2 = Math.max(max2,height[i-1])
    //          right.unshift(max2)
    //     }
    //     let min = Infinity
    //     for(let i=0;i<height.length;i++){
    //        min =  Math.min(left[i],right[i])
    //         res.push(min-height[i])
    //     }
    //     let sum=0
    //     for(let ele of res){
    //         if(ele>0)
    //         sum+=ele
    //     }
    //    return sum
};