let levelOrder = function (root) {
    if (!root) {
        return [];
    }

    let queue = [];
    root.level = 1;
    queue.push(root);

    let result = [];
    let elements = [];
    let level = root.level;
    while (queue.length > 0) {
        let node = queue.shift();

        if (node.level !== level) {
            level = node.level;
            result.push(elements.slice(0));
            elements.splice(0, elements.length);
        }

        elements.push(node.val);

        if (node.left) {
            node.left.level = node.level + 1;
            queue.push(node.left);
        }

        if (node.right) {
            node.right.level = node.level + 1;
            queue.push(node.right);
        }
    }
    result.push(elements.slice(0));

    return result;
};
