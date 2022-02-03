/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
 const hashMap = {};
    for (var i = 0, l = s.length; i < l; i++) {
        if (!hashMap[s[i]]) {
            hashMap[s[i]] = 1;
        } else {
            hashMap[s[i]]++;
        }
    }
    for (var i = 0, l = t.length; i < l; i++){
        if (!hashMap[t[i]]) {
            return t[i];
        } else {
            hashMap[t[i]]--;
        }
    }  
};