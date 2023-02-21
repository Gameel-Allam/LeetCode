var middleNode = (head) => {
    let fast = head, slow = head;
    while (fast?.next)
        fast = fast.next.next, slow = slow.next;
    return slow;
}


// Source : https://leetcode.com/problems/middle-of-the-linked-list/description/
// Author : Fady Allam
// Date   : 2023-2-21
/********************************
/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Approach:
 * 
 * use two pointers one is slow that moves by 1 step and the second is fast that movies by 2 steps, 
 * so at each piont after first move the slow pointer is at the middle the fast - even before the first move
 *  when both is at the same point it also be the middle as length = 1 -
 * 
 * so to get the middle of the given list we check if fast pointer location is
 *          for even length fast = null that it at the null value after last list of the linked list.
 *          for odd length fast.next = null that the fast pointer at the last list of the linked list.
 * 
 * while (fast?.next) check both as it check if fast is exist which mean fast != null and 
 * then whole condition fast.next !=null
********************************/