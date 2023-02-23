var mergeTwoLists = (list1, list2) => {
    //base case 1
    if (!list2) return list1;
    //base case 2
    if (!list1) return list2;
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


// Source : https://leetcode.com/problems/merge-two-sorted-lists/
// Author : Fady Allam
// Date   : 2023-2-19
/********************************
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * Approach:
 * it`s can solved as a recursion problem where we have 2 base cases 
 * line 1 & 2 where we reach the end of one of the two lists if so we retrun the remaining of the other list that not reach the end yet.
 * then we check if the current list1 value is less then the current list2 value if so then take this value say (x)
 * call the function again with new parameters the next value after (x) and the other checked list.
 * Repeat the process untill reach one of the two base cases
********************************/