const log = console.log.bind(console)

const reverseNumbers = function (nums, start, end) {
    for (let i = start; i < end; i++) {
        let tmp = nums[i]
        nums[i] = nums[end]
        nums[end] = tmp
        end = end - 1
    }
    // while (start < end) {
    //     let tmp = nums[start]
    //     nums[start] = nums[end]
    //     nums[end] = tmp
    //     start = start + 1
    //     end = end - 1
    // }
    return nums
}
const rotate = function(nums, k) {

    k = k % nums.length
    reverseNumbers(nums, 0, nums.length - 1);
    reverseNumbers(nums, 0, k - 1);
    reverseNumbers(nums, k, nums.length - 1);
    return nums
};

const __main = () => {
    let a = [1,2,3,4,5,6,7]
    let b = 3
    let c = rotate(a, b)
    log(c)
}
__main()