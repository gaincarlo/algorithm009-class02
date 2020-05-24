/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i] += 1
        digits[i] %= 10
        if (digits[i] !== 0) {
            return digits
        }
    }
    const newArr = new Array(len + 1)
    let result = [...newArr].map(() => 0)
    result[0] = 1
    return result
};
