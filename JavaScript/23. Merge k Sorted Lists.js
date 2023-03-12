var merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) { l1.next = merge(l1.next, l2); return l1; }
    else { l2.next = merge(l2.next, l1); return l2; }
};

var mergeKLists = (lists) => {
    let length = lists.length;
    if (!length) return null;
    for (let i = 1; i < length; i++) {
        lists[0] = merge(lists[0], lists[i]);
    }
    return lists[0];
};


// Source : https://leetcode.com/problems/merge-k-sorted-lists/
// Author : Fady Allam
// Date   : 2023-3-12
/********************************
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * Approach:
 * First we check if the lists length is zero then we return null.
 * We will start a loop over the lists and will merge the lists one by one with the first list
    and save the sorted list between the two in (list[0]) that keep merge untill we finished all lists
        1-The loop start from index 1 since if the there only one list it would return it which will be (lists[0]).
        2-Inside the loop it will go list by list and call the merge function to merge the two lists
        and return the sorted list which would be saved agian in list[0] that will be used to merge with the next list of the lists.
 * The merge Function will do two main operations:
    1-Retrun the other list if one of them reach it`s end.
    2-check which one current value is small so it would return it but before return the list
    it assign the list.next to the smallest between the next of Current small list and the other list 
    that the returned list will have a merged sorted values of both the two lists.
********************************/