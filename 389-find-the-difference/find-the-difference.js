/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // add and subtract the char count
    const obj = {};

    // this loop for add and subtract the char add s and remove t for get -1 in end what ever letter are missing
    for (let i = 0; i < t.length; i++) {
        if (s[i]) {
            obj[s[i]] = (obj[s[i]] || 0) + 1;
        }
        obj[t[i]] = (obj[t[i]] || 0) - 1;
    }

    // find the -1 key
    for (const key in obj) {
        if (obj[key] === -1) return key;
    }
};