//First negative integer in every window of size k
//op - [ -1, -1, -7, -7, -15, -15, -15, 0 ]

let arr = [12, -1, -7, 8, -15, 30, 16, 28]


function max(arr, k) {
    let list = []
    let final = []
    for (let i = 0; i < k; i++) {
        if (arr[i] < 0)
            list.push(arr[i])
    }

    for (let i = k; i < arr.length; i++) {

        if (arr[i] < 0)
            list.push(arr[i])

        if (arr[i - k] == list[0])
            final.push(list.shift())


        if (list.length == 0)
            final.push(0)

        else final.push(list[0])
    }

    return final
}

let res = max(arr, 3)
console.log(res)