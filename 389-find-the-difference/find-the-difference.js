/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // count both freq and than copmare
    const objS = {};
    const objT = {};

    for (const char of s) {
        objS[char] = (objS[char] || 0) + 1;
    }

    for (const char of t) {
        objT[char] = (objT[char] || 0) + 1;
    }

    for (const key of t) {
        if (objS[key] !== objT[key]) return key;
    }
};