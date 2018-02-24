let isSymmetric = function (root) {
    function inOrderTraversal(node, level, path) {
        if (node) {
            inOrderTraversal(node.left, level + 1, path);
            path.push(node.val + level);
            inOrderTraversal(node.right, level + 1, path);
        } else {
            path.push(0);
        }
    }

    let path = [];
    inOrderTraversal(root, 1, path);

    let result = true;
    for (let i = 0, len = path.length; i < len / 2; i++) {
        if (path[i] !== path[len - i - 1]) {
            result = false;
            break;
        }
    }
    return result;
};
