//min length of substring containig all unique character of a tring
var lengthOfLongestSubstring = function (s) {

    //let map = new Map()
    //  s.split('').forEach(n=>map.set(n,map.get(n)+1||1))

    let map = {}
    for (let ele of s) {
        map[ele] = (map[ele] || 0) + 1
    }

    let l = 0
    let r = s.length - 1
    while (l < r) {

        while (map[s[l]] > 1) {
            console.log('hi', map)
            map[s[l]]--
            l++
        }

        while (map[s[r]] > 1) {
            console.log('bi', map)
            map[s[r]]--
            r--
        }
        break

    }
    return r - l + 1
};