var check = (s, t) => {
    let temp = new Array(255), length = s.length;
    for (let index = 0; index < length; index++) {
        const difference = (s[index].codePointAt() -
            t[index].charCodeAt());
        const current = temp[s[index].charCodeAt()];
        if (current == undefined)
            temp[s[index].charCodeAt()] = Math.abs(difference);
        else if (current == Math.abs(difference))
            continue;
        else return false;
    }
    return true;
}
var isIsomorphic = function (s, t) {
    return (check(s, t) && check(t, s));
};


// Source : https://leetcode.com/problems/isomorphic-strings/
// Author : Fady Allam
// Date   : 2023-2-17
/********************************
/**
* @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Approach:
 * using Frequency array to check for all characters in ( s ) and ( t ) if this current character in ( t ) / ( s )
 *  with it`s value in the Frequency array is given the same differnce for all the appearance
 *  of the opposite character in the same index of ( t ) / ( s ) string for it`s corresponding character in ( s ) string
********************************/