let isValidBST = function (root) {
    let inOrderTraversal = function (node, numbers) {
        if (node) {
            inOrderTraversal(node.left, numbers);
            numbers.push(node.val);
            inOrderTraversal(node.right, numbers);
        }
    };

    let numbers = [];
    inOrderTraversal(root, numbers);

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) {
            return false;
        }
    }

    return true;
};
