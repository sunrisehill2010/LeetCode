function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }

    let [slow, fast] = [head, head.next];
    while (fast && slow) {
        if (fast === slow) {
            return true;
        }
        fast = fast.next;

        if (!fast) {
            return false;
        } else {
            fast = fast.next;
        }

        slow = slow.next;
    }

    return false;
};
