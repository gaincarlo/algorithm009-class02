
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    // 如果长度不一样直接 return false
    if (s.length !== t.length) {
        return false
    }
    // 思路就是定义一个字典字符为 key，如果字典里没有这个 key
    // 就设置这个 key 为 1，如果已经存在就加一
    // 再遍历第二个字符串，如果有存在 key 就减 1，不存在就设置值为 1，
    // 最后遍历这个字典，如果字典里有值不为 1 的就直接 return false，遍历完证明都是 0，就return true
    let dict = {}
    for (let i = 0; i < s.length; i++) {
        if(!dict[s[i]]) {
            dict[s[i]] = 1
        } else {
            dict[s[i]] += 1
        }

    }

    for (let i = 0; i < s.length; i++) {
        dict[t[i]] -= 1
    }
    const keys = Object.keys(dict)
    for (let i = 0;i < keys.length;i +=1) {
        if (dict[keys[i]] !== 0) {
            return false
        }
    }
    return true
};
