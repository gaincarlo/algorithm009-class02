/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    let result = 0
    let gIndex = 0
    let sIndex = 0
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    while (gIndex < g.length && sIndex < s.length) {
        if (s[sIndex] >= g[gIndex]) {
            result += 1
            gIndex += 1
        }
        sIndex += 1
    }
    return result
};