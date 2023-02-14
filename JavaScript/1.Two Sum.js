var twoSum = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        idx2 = nums.indexOf(target - nums[index]);
        if (idx2 == -1 || idx2 == index) continue;
        else if (index > idx2) return [idx2, index]
        else return [index, idx2]
    }
};

// Source : https://leetcode.com/problems/two-sum/
// Author : Fady Allam
// Date   : 2023-2-14
/********************************
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 
 * Approach:
 * Go through the array element by element and using Array.indexOf()
 * to get the second element of the array that makes with the current element the needed target.
********************************/