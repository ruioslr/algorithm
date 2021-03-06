/*
* 二叉搜索树
*/


export class BST {
  constructor() {
    this.root = null;
  }

  // 插入： 当向树中插入一个新的节点时，该节点将总是作为叶子节点
  insert = (key) => {
    const newNode = new Node(key);
    if(this.root === null) {
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode);
    }
  };
  // 辅助查找
  insertNode = (node, newNode) => {
    if(node.key >= newNode.key){
      if(node.right){
        this.insertNode(node.right, newNode)
      }else {
        node.right = newNode
      }
    }else {
      if(node.left){
        this.insertNode(node.left, newNode)
      }else {
        node.left = newNode;
      }
    }
  }

  // 查找，这里我是返回找到的node节点
  search = (key) => {
    this.searchNode(this.root, key)
  }
  // 查找的辅助方法
  searchNode = (node, key) => {
    if(node === null) return null;
    if(key > node.key){
      return this.searchNode(node.right, key)
    }else if(key < node.key){
      return this.searchNode(node.left, key)
    }else {
      return node;
    }
  }

  // 中序遍历: 二叉树会按照升序来排列
  inOrderTraverse = (visitor) => {
    this.inOrderTraverseNode(this.root, visitor);
  }
  // 中序遍历辅助方法
  inOrderTraverseNode = (node, visitor) => {
    if(node === null) return;
    this.inOrderTraverseNode(node.left);
    visitor(node);
    this.inOrderTraverseNode(node.right)
  }

  // 先序遍历： 理解为深度优先
  preOrderTraverse = (visitor) => {
    this.preOrderTraverseNode(this.root, visitor)
  }
  // 先序遍历辅助方法
  preOrderTraverseNode = (node, visitor) => {
    if(node === null) return;
    visitor(node);
    this.preOrderTraverseNode(node.left, visitor);
    this.preOrderTraverseNode(node.right, visitor);
  }

  // 后序遍历
  postOrderTraverse = (visitor) => {
    this.postOrderTraverse(this.root, visitor)
  }
  // 后序遍历辅助方法
  postOrderTraverseNode = (node, visitor) => {
    this.postOrderTraverseNode(node.left, visitor);
    this.postOrderTraverseNode(node.right, visitor);
    visitor(node);
  }

  //删除
  remove = (key) => {
  //  二叉树的删除有三种情况
  //  1：删除的节点没有子节点
  //  2：删除的节点有一个子节点
  //  3：删除的节点有两个子节点
  //  思想： 删除后，返回要删除的节点的子树
    this.root = this.removeNode(this.root, key);
  }

  // 删除某个树上的某个节点，并返回删除之后的树
  removeNode = (root, key) => {
    if(root === null){
      return null
    }

    if(key > root.key){
      root.right = this.removeNode(root.right, key);
      return root;
    }
    if(key < root.key){
      root.left = this.removeNode(root.left, key);
      return root;
    }

    // 第一种情况
    if(root.left === null && root.right === null){
      return null;
    }

    // 第二种情况
    if(root.left === null){
      return root.right;
    }

    if(root.right === null){
      return root.left;
    }

    // 第三种情况
    // 1，找到中序后继,
    // 注意： 之所以给minNode传入node.right，是因为如果传node,则minNode方法返回的是以node为root的树的最小值，它是比node小的，并不是中序后继，
    // 要找到比node大的且是最小的一个，应该从node.right子树中找
    const next = this.minNode(root.right);
    // 2, 将要删除的节点的值替换成中序后继的值
    root.key = next.key;
    // 3, 删掉中序后继
    root.right = this.removeNode(root.right, next.key);
    return root;
  }



  // min: 即为找到树的最左边的节点
  min = () => {
    return this.minNode(this.root);
  }
  // min的辅助方法
  minNode = (node) => {
    let current = node;
    while(current !== null && current.left !== null){
      current = current.left;
    }
    return current;
  }

  // max: 即为找到树的最右边的节点
  max = () => {
    this.maxNode(this.root);
  }
  // min的辅助方法
  maxNode = (node) => {
    let current = node;
    while(current !== null && current.right !== null){
      current = current.right;
    }
    return current;
  }
}

// 树中的节点
export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}





