/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // hashmap
    const neededObj = {};
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (neededObj[needed] !== undefined) {
            return [neededObj[needed], i];
        }
        neededObj[nums[i]] = i;
    }
    return [];
};