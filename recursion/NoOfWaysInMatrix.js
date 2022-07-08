function ways(n,m){
    if(n==1||m==1)
    return 1
    return power(n,m-1) + power(n-1,m)
  }
  let ans = ways(3,3)
  console.log(ans)
  