

var maxArea = function (height) {

    let l = 0
    let r = height.length - 1

    let max = -1
    while (l < r) {

        let min = Math.min(height[l], height[r])
        let res = min * (r - l)
        max = Math.max(res, max)
        if (height[l] < height[r])
            l++
        else
            r--

    }

    return max

    //-------Brute Force-----------------------------
    // let max = -Infinity
    // for(let i=0;i<height.length;i++){
    //      let res = 0
    //     for(let j=i+1;j<height.length;j++){
    //           let min = Math.min(height[i],height[j])
    //           res = min*(j-i)
    //          max = Math.max(res,max)
    //     }
    // }
    // return max
};