//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



let res = [], map = new Map();

nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
}

return res;


//------------------------------------------------------    
//     let map = {}
//     for(let ele of nums){
//         map[ele] = (map[ele]||0)+1
//     }
//     let res = []
//   while(k>0){
//       let max = -Infinity
//       let ele = -Infinity
//       for(let key in map){
//           if(map[key]>max){
//               max= map[key]
//               ele = key
//           }
//       }

//       res.push(ele)
//       delete map[ele]
//       k--
//   }
//     return res
};