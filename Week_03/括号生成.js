const log = console.log.bind(console)

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    let result = []

    const _generate = function (left, right, n, s) {
        if(left === n && right === n) {
            result.push(s)

        }
        let s1 = s + '('
        let s2 = s + ')'
        if (left < n) {
            _generate(left + 1, right, n, s1)
        }
        if (right < left) {
            _generate(left, right + 1, n, s2)
        }
    }
    _generate(0, 0, n, '', result)
    return result
};

generateParenthesis(3)