function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let traverseTree = function (result, path, root) {
    if (root == null) {
        return;
    }

    path.push(root.val);

    let isLeaf = true;
    if (root.left) {
        isLeaf = false;
        traverseTree(result, path.slice(0), root.left);
    }

    if (root.right) {
        isLeaf = false;
        traverseTree(result, path.slice(0), root.right);
    }

    if (isLeaf) {
        result.push(path.join("->"));
    }
};

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
let binaryTreePaths = function (root) {
    let result = [];
    let path = [];

    traverseTree(result, path, root);

    return result;
};
