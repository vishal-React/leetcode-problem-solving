/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    const obj = {};
    let right = 0;
    let left = 0;
    let maxSubString = 0;
    let maxFreq = 0;

    while (right < s.length) {
        obj[s[right]] = (obj[s[right]] || 0) + 1; // current window freq
        const currentWindow = right - left + 1; // current window
        maxFreq = Math.max(maxFreq, obj[s[right]]); // max freq in current window
        const replaceableNumber = currentWindow - maxFreq; // how many can be replaceable in current window
        // console.log("currentWindow", currentWindow);
        // console.log("obj", obj);
        // console.log("maxFreq", maxFreq);
        // console.log("replaceableNumber", replaceableNumber);
        if (k < replaceableNumber) {
            // console.log("replaceableNumber greater than k");
            obj[s[left]]--;
            left++;
        }
        maxSubString = Math.max(maxSubString, right - left + 1);
        right++;
    }
    console.log("maxSubString", maxSubString);
    return maxSubString
};