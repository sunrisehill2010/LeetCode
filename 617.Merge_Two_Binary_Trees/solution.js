function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
let mergeTrees = function (t1, t2) {
    if (!t1 && !t2) {
        return null;
    } else if (!t1 && t2) {
        return t2;
    } else if (t1 && !t2) {
        return t1;
    }

    t1.val = t1.val + t2.val;

    if (!t1.left && t2.left) {
        t1.left = t2.left;
    } else if (t1.left && t2.left) {
        mergeTrees(t1.left, t2.left);
    }

    if (!t1.right && t2.right) {
        t1.right = t2.right;
    } else if (t1.right && t2.right) {
        mergeTrees(t1.right, t2.right);
    }

    return t1;
};
