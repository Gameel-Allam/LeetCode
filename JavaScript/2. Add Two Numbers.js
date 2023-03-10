var addTwoNumbers = function (l1, l2, carry) {
    if (!l1 && !l2 && !carry) return null;
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, Math.floor(sum / 10)));
};


// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Fady Allam
// Date   : 2023-3-10
/********************************
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 *
 * Approach:
 *  It can be solved as a recursion problem with the following:
 *      The base case is when all (l1) and (l2) become null and the (carry) equal zero.
 *      We get the current sum of both the current list of (l1) and (l2) and 
        if there a carry provided from the previous recursion add it, also provide a fullback value zero
        if any of them is null or undefined.
 *      We will retrun new linked list that have:
            1-value of the remaining part of 10 - right most number- of the sum as we will use
            the -left most number - if exist as a carry
            2-it`s head will be the getting by call the functiojn again with new args 
            the next of (l1) and (l2) and if there any carry will be provided that keep 
            callback untill reach the base case.
********************************/