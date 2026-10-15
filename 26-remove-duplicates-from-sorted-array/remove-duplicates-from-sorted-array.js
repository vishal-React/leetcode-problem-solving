/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        const element = nums[right];
        if (nums[left] !== element) {
            nums[left + 1] = element;
            left++;
        }
    }
    return left + 1
};