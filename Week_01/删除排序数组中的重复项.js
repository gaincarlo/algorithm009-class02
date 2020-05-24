const removeDuplicates = function(nums) {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            nums[j + 1] = nums[i]
            j += 1
        }
    }
    return j + 1
};