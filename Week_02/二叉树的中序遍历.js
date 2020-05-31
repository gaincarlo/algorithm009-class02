const log = console.log.bind(console)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// const inorderTraversal = function(root) {
//     if(!root) {
//         return []
//     }
//     let result = []
//     helper(root, result)
//     return result
// };
// const helper = function (node, res) {
//     if(node.left !==null) {
//         helper(node.left, res)
//         res.push(node.val)
//     }
//     res.push(node.val)
//     if(node.right !==null) {
//         helper(node.right, res)
//         res.push(node.val)
//     }
// }

// 方法二
const inorderTraversal = function(root) {
    if(!root) {
        return []
    }
    let result = []
    let cur = root
    let stack = []
    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }

    return result
};
