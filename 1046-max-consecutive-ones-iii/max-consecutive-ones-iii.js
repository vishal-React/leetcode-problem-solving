/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let maxWindowSize = 0;
    const currWindowFreq = {};

    for (let right = 0; right < nums.length; right++) {
        currWindowFreq[nums[right]] = (currWindowFreq[nums[right]] || 0) + 1;

        let currWindowSize = right - left + 1;
        let replaceableZeros = currWindowSize - (currWindowFreq[1] || 0);

        while (replaceableZeros > k) {
            currWindowFreq[nums[left]]--;
            left++;
            currWindowSize = right - left + 1;
            replaceableZeros = currWindowSize - (currWindowFreq[1] || 0);
        }
        maxWindowSize = Math.max(maxWindowSize, right - left + 1);
    }
    return maxWindowSize
};