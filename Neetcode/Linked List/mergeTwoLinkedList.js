var mergeTwoLists = function (l1, l2) {
    let nullNode = { val: 0, next: null };
    let prev = nullNode;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    }
    prev.next = l1 || l2;
    return nullNode.next
};