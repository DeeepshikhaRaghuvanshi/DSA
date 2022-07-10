var hasCycle = function (head) {

    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        } else {
            set.add(head);
            head = head.next;
        }
    }

    return false;
};