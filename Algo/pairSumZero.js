//find out the first pair whose sum is zero in the given array 
let a = [-5, -4, -3, -2, 0, 2, 3, 6, 8]

function sumZeroBasic(a) {
    for (let left = 0, right = a.length - 1; left < a.length / 2, right > a.length / 2;) {
        if (a[left] + a[right] == 0)
            return [a[left], a[right]]
        else if (a[left] + a[right] > 0)
            right--
        else
            left++
    }
}
let res1 = sumZeroBasic(a)

function sumZeroEff(a) {
    for (let left = 0, right = a.length - 1; left < a.length / 2, right > a.length / 2;) {
        if (a[left] + a[right] == 0)
            return [a[left], a[right]]
        else if (a[left] + a[right] > 0)
            right--
        else
            left++
    }
}

let res2 = sumZeroEff(a)

