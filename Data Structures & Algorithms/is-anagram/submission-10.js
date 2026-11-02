class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const matched = s.split('').sort().join('') === t.split('').sort().join('');
       if(matched) {
        return true;
       } else {
        return false;
       }
    }
}
const s = "racecar", t = "carrace";
