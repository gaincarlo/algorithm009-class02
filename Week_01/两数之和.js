/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let dict = {}
    for(let i = 0;i < nums.length; i = i + 1) {
        let n = target - nums[i]
        let find = dict[n]
        if (find !== undefined) {
            return [find, i]
        }
        dict[nums[i]] = i
    }
};