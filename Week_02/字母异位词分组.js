const log = console.log.bind(console)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    let dict = {}
    let result = []
    for (let i = 0; i < strs.length; i += 1) {
        let element = strs[i]
        let sorted = element.split('').sort().join('');
        if(!dict[sorted]) {
            dict[sorted] = []
            dict[sorted].push(element)
        } else {
            dict[sorted].push(element)
        }
    }
    const keys = Object.keys(dict)
    for (let i = 0; i < keys.length; i++) {
        result.push(dict[keys[i]])
    }
    return result
};


log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))