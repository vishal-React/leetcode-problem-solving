/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0;
    let left = 0;
    let product = 1;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k && left <= right) {
            product = product / nums[left];
            left++;
        }
        let currWindow = right - left + 1;
        count += currWindow;
    }
    return count;
};