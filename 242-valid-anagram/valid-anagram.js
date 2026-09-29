/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sFreq = {};
    const tFreq = {};

    for (let i = 0; i < s.length; i++) {
        sFreq[s[i]] = (sFreq[s[i]] || 0) + 1;
        tFreq[t[i]] = (tFreq[t[i]] || 0) + 1;
    }

    for (const key in sFreq) {
        if (sFreq[key] !== tFreq[key]) {
            return false;
        }
    }
    return true;
};