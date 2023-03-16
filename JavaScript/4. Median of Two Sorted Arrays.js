var findMedianSortedArrays = function (nums1, nums2) {
    let length1 = nums1.length, length2 = nums2.length, ans = [];
    for (let j = 0, k = 0; j < length1 || k < length2;)
        (j == length1) ? (ans.push(nums2[k]), k++) : (k == length2) ? (ans.push(nums1[j]), j++) : (nums1[j] < nums2[k]) ? (ans.push(nums1[j]), j++) : (ans.push(nums2[k]), k++);
    return (ans.length % 2 === 0) ? ((ans[(ans.length / 2) - 1] + ans[ans.length / 2]) / 2) : (ans[((ans.length + 1) / 2) - 1]);
};


// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// Author : Fady Allam
// Date   : 2023-3-16
/********************************
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * Approach:
 * The problem solution would be in two steps:
        1-Combine 2 arrays in 1 array - ans - By loop throw both of them and push them in sorted order
        to the ans array untill one of the arrays ends when (j == length1) OR (k == length2) then we
        push the remin of the other array untill it also ends.
        2-Retrun the median from the ans array by:
            -getting the middle element if the ans length is odd
            -getting the 2 middle element and divide by 2 if the ans length is even.
********************************/