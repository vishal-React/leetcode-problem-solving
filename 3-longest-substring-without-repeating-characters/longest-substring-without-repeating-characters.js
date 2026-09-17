/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const obj = {};
    let left = 0;
    let right = 0;
    let maxSubstringNum = 0;
    let currMaxStringNum = 0;

    while (right < s.length) {
        if (obj[s[right]]) {
            obj[s[left]]--;
            left++;
        } else {
            obj[s[right]] = 1;
            currMaxStringNum = right - left + 1;
            maxSubstringNum = Math.max(currMaxStringNum, maxSubstringNum);
            right++;
        }
    }
    console.log("maxSubstringNum", maxSubstringNum);
    return maxSubstringNum
};