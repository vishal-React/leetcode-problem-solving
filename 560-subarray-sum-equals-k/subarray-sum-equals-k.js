/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // prefixSum + freq
    const seen = { 0: 1 };
    let count = 0;
    let sum = 0;
    for (const num of nums) {
        sum += num;
        const needed = sum - k;
        if (seen[needed]) {
            count += seen[needed];
        }
        seen[sum] = (seen[sum] || 0) + 1;
    }
    return count
};