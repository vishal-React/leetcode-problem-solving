/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const obj = {};
    const windowFreq = {};

    for (let char of s1) {
        obj[char] = (obj[char] || 0) + 1;
    }
    console.log("obj", obj);

    for (let i = 0; i < s1.length - 1; i++) {
        windowFreq[s2[i]] = (windowFreq[s2[i]] || 0) + 1;
    }
    console.log("windowFreq", windowFreq);

    let left = 0;
    for (let right = s1.length - 1; right < s2.length; right++) {
        // 1 first add cahr in windowFreq
        windowFreq[s2[right]] = (windowFreq[s2[right]] || 0) + 1;

        // 2 check wether all char are match the exact count or not
        let isMatch = true;
        for (const char in obj) {
            if (obj[char] !== windowFreq[char]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return true;
        }
        windowFreq[s2[left]]--;
        left++;
    }
    return false;
};