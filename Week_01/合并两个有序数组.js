
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            k = k - 1
            i = i - 1
        } else {
            nums1[k] = nums2[j]
            k = k - 1
            j = j - 1
        }
    }
    while (j >=0) {
        nums1[k] = nums2[j]
        k = k - 1
        j = j - 1
    }
};
merge([4,5,6,0,0,0], 3, [2,5,6], 3)