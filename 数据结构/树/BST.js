class BST {
  constructor() {
    this.root = null;
  }

  // 插入
  insert = (data) => {
    const newNode = new Node(data);
    if(this.root === null) {
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode);
    }
  };
  // 辅助查找
  insertNode = (node, newNode) => {
    if(node.data >= newNode.data){
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
  search = (data) => {
    this.searchNode(this.root, data)
  }
  // 查找的辅助方法
  searchNode = (node, data) => {
    if(node === null) return null;
    if(data > node.data){
      return this.searchNode(node.right, data)
    }else if(data < node.data){
      return this.searchNode(node.left, data)
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
  remove = (data) => {
  //  二叉树的删除有三种情况
  //  1：删除的节点没有子节点
  //  2：删除的节点有一个子节点
  //  3：删除的节点有两个子节点
  //  思想： 删除后，返回要删除的节点的子树
    this.root = this.removeNode(this.root, data);
  }

  // 删除某个树上的某个节点，并返回删除之后的树
  removeNode = (node, data) => {
    if(node === null){
      return null
    }

    // 第一种情况
    if(node.left === null && node.right === null){
      return null;
    }

    // 第二种情况
    if(node.left !== null){
      return node.left;
    }

    if(node.right !== null){

    }
  }



  // min: 即为找到树的最左边的节点
  min = () => {
    this.minNode(this.root);
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
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}





