var pivotIndex = function (nums) {
    let rightSum = 0, leftSum = 0;
    for (const iterator of nums) rightSum += iterator;
    const length = nums.length
    for (let i = 0; i < length; i++) {
        const current = nums[i];
        rightSum -= current;
        if (rightSum === leftSum) return i;
        leftSum += current;
    }
    return -1;
};



// Source : https://leetcode.com/problems/find-pivot-index/description/
// Author : Fady Allam
// Date   : 2023-2-16
/********************************
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Approach:
 * Get the total sum of the array first then pass throw elements from index 0 
 * and remove the element from the rightside and check if the index is the Pivot index
 *  and keep doing untill finish the array and if not find returns -1
********************************/