var reverseList = function (head, ans = null) {
    while (head) [head.next, ans, head] = [ans, head, head.next];
    return ans;
};


// Source : https://leetcode.com/problems/reverse-linked-list/
// Author : Fady Allam
// Date   : 2023-2-20
/********************************
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Approach:
 * As Javascript engine take a snapshot of the values in the right side when destruction, so before
 *  assign imagine that the three variable in the right side now with differnet name and reference
 *  but still have there logic like if we suppose that head.next is before destruction is =2 and
 *  it`s head.next.next is =3 then the last assignment on the destruction - head = head.next - will make
 *  the head = 2 and the head.next = 3 even if both head and / or head.next had changed during the assignment process.
********************************/