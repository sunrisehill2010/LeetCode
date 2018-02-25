let maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let queue = [];
    root.level = 1;
    queue.push(root);

    let depth = 1;
    let level = root.level;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.level !== level) {
            level = node.level;
            depth++;
        }

        if (node.left) {
            node.left.level = node.level + 1;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.level = node.level + 1;
            queue.push(node.right);
        }
    }

    return depth;
};
