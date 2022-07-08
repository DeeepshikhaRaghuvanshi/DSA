//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('')
        if (!map[key])
            map[key] = [strs[i]]
        else
            map[key].push(strs[i])
    }
    return Object.values(map)


};