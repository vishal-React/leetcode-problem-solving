/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;

    let windowAddition = 0;
    let minWindowSize = 0;

    for (let right = 0; right < nums.length; right++) {
        windowAddition += nums[right];

        while (windowAddition >= target) {
            let currWindowSize = right - left + 1;
            if (minWindowSize === 0 || minWindowSize > currWindowSize) {
                minWindowSize = currWindowSize;
            }
            windowAddition -= nums[left];
            left++;
        }
    }
    return minWindowSize
};