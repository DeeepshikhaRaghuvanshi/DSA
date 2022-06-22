//Given two sorted arrays of distinct elements, find those elements from both arrays that are not common. The output should be displayed in sorted order.
//input :    3 , 10 20 30 , 5 , 20 25 30 40 50

function solution(a) {
    //Write your solution here
    let a1 = readLine().split(' ')
    let b = readLine()
    let a2 = readLine().split(' ')
    let arr = []
    let map = {}
    for (let ele of a1) {
        map[ele] = (map[ele] || 0) + 1
    }
    for (let ele of a2) {
        map[ele] = (map[ele] || 0) + 1
    }

    for (let ele in map) {
        if (map[ele] == 1)
            arr.push(ele)
    }
    return arr.sort(function (a, b) { return a - b }).join(' ')
}