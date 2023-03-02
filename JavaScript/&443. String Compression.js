var compress = function (chars) {
    let temp = new Array(255), length = chars.length, ans = [];
    for (let i = 0; i < length; i++)
        temp[chars[i].codePointAt()] === undefined ?
            temp[chars[i].codePointAt()] = 1 : temp[chars[i].codePointAt()]++;
    for (let i = 0; i < length; i++)
        if (temp[chars[i].codePointAt()] === undefined)
            continue;
        else if (temp[chars[i].codePointAt() === 1])
            ans.push(chars[i])
        else {
            ans.push(chars[i], temp[chars[i].codePointAt()]);
            temp[chars[i].codePointAt()] = undefined
        }
    chars = ans;
    return ans.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));

// Source : https://leetcode.com/problems/string-compression/description/
// Author : Fady Allam
// Date   : 2023-3-1
/**
 * @param {character[]} chars
 * @return {number}
 */