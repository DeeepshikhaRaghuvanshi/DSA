// merge 2 sorted arrays 

let a = [1,3,5,8]
let b = [2,4,7,10,11,12,14]

let c =[]  // resultant array 
let i=0
let j=0
while(i<a.length&&j<b.length){
    if(a[i]<b[j]){
       c.push(a[i])
       i++
    }
    else{
    c.push(b[j])
    j++
    }
}
while(i<a.length){
    c.push(a[i])
}
while(j<b.length){
    c.push(b[j])
    j++
}
console.log(c)