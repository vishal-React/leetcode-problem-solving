/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";
    const objTargetFreq = {};
    for (const char of t) {
        objTargetFreq[char] = (objTargetFreq[char] || 0) + 1;
    }

    let left = 0;
    let currWindowFreq = {};
    let minimumWindowChar = "";
    let required = t.length;

    for (let right = 0; right < s.length; right++) {
        currWindowFreq[s[right]] = (currWindowFreq[s[right]] || 0) + 1;
        // if we found valid char equals to or greater than objTargetFreq than we can do required minus
        if (
            objTargetFreq[s[right]] &&
            objTargetFreq[s[right]] >= currWindowFreq[s[right]]
        ) {
            required--;
        }
        while (required === 0) {
            // this is for minimumWindowChar
            if (
                !minimumWindowChar.length ||
                minimumWindowChar.length > right - left + 1
            ) {
                minimumWindowChar = s.slice(left, right + 1);
            }

            // when window is valid we have to shrink that window untill it become invalid and we have to find next smallest valid window. before remove left char we have to increase required if we remove valid char from currwindow with correct freq
            if (
                objTargetFreq[s[left]] &&
                objTargetFreq[s[left]] === currWindowFreq[s[left]]
            ) {
                required++;
            }
            currWindowFreq[s[left]]--;
            left++;
        }
    }
    return minimumWindowChar;
};