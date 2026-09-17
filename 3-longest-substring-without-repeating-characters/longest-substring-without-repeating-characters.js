/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const obj = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (obj[char] !== undefined) {
            left = Math.max(left, obj[char] + 1);
        }

        obj[char] = right;
        const currentLength = right - left + 1;

        maxLength = Math.max(maxLength, currentLength);
    }

    console.log(maxLength);
    return maxLength
};