/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set = new Set(nums2); // unique nums2

    const intersectionObj = {};
    for (const num of nums1) {
        if (set.has(num)) {
            // check that nums1 num are in nums2 set or not if yes add in obj
            intersectionObj[num] = num;
        }
    }
    return Object.values(intersectionObj);
};