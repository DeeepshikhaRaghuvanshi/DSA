function productOfArray(arr) {

  if (arr.length == 0)
    return 1
  console.log(arr)
  return arr.shift() * productOfArray(arr)

}

let arr = [1, 2, 3, 4]
let ans = productOfArray(arr)
console.log(ans)
