const countSubarrays = function (nums, minK, maxK) {
    let count = 0, minPosition = -1, maxPosition = -1, leftBound = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == minK) minPosition = i;
        if (nums[i] == maxK) maxPosition = i;
        if (nums[i] < minK || nums[i] > maxK) leftBound = i;
        count += Math.max(0, Math.min(minPosition, maxPosition) - leftBound);
    }
    return count;
};


// Source : https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/
// Author : Fady Allam
// Date   : 2023-3-4
/********************************
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
********************************/


// first solution but get time exceeding
// var countSubarrays = function (nums, minK, maxK) {
//     let length = nums.length, ans = 0, temp = 0;
//     singleCheck = false, doubleCheck = [false, false];
//     for (let i = 0; i < length; i++) {
//         if (nums[i] === minK)
//             for (let j = i; j < length; j++) {
//                 if (nums[j] > maxK || nums[j] < minK) { singleCheck = false; break; }
//                 else if (nums[j] === maxK) { singleCheck = true; ans++; continue; }
//                 else if (singleCheck) ans++;
//             }
//         else if (nums[i] === maxK)
//             for (let j = i; j < length; j++) {
//                 if (nums[j] > maxK || nums[j] < minK) { singleCheck = false; break; }
//                 else if (nums[j] === minK) { singleCheck = true; ans++; continue; }
//                 else if (singleCheck) ans++;
//             }
//         else if (nums[i] < maxK || nums[i] > minK)
//             for (let j = i; j < length; j++) {
//                 if (nums[j] > maxK || nums[j] < minK) { doubleCheck = false; break; }
//                 else if (nums[j] === minK) doubleCheck[0] = true;
//                 else if (nums[j] === maxK) doubleCheck[1] = true;
//                 if (doubleCheck[0] && doubleCheck[1]) { ans++ }
//             }
//         doubleCheck = [0, 0];
//         singleCheck = false;
//     }
//     return ans;
// };
