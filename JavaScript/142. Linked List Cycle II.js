var detectCycle = (head) => {
    const set = new Set();
    while (head) {
        if (set.has(head)) return head;
        set.add(head);
        head = head.next;
    }
    return null;
};

// Source : https://leetcode.com/problems/linked-list-cycle-ii/
// Author : Fady Allam
// Date   : 2023-2-22
/********************************
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Approach:
 * Make a set to contain node`s values so to check if a value appper twice then it would be the start of the cycle.
 * code iterate over the linked list only stop when it`s reach a null that mean no cycle in the the linked list.
 * At every node
 *      check if it`s exist before that mean it`s the start of the cycle.
 *      does`t exist before so add it to the set for farther checks.
 * ********************************/