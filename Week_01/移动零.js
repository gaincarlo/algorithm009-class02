/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let zeroCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount += 1
        } else if (zeroCount > 0) {
            let t = nums[i]
            nums[i] = 0
            nums[i - zeroCount] = t
        }
    }
};