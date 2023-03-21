var zeroFilledSubarray = function (nums) {
    let subCount = 0, ans = 0;
    for (let i = 0, j = 0; i < nums.length; i++)
        (!nums[i]) ? ans += (++subCount) : subCount = 0;
    return ans;
};


// Source : https://leetcode.com/problems/number-of-zero-filled-subarrays/description/
// Author : Fady Allam
// Date   : 2023-3-21
/********************************
 * @param {number[]} nums
 * @return {number}
 *
 *
 * Approach:
 * Simply initialize inner subcount that count the subarrays in the nums
 * That increasing the subCount by 1 if it still inside a vaild subarray and kepp add the result value
    to the ans and return the ans after the end looping the nums.
********************************/