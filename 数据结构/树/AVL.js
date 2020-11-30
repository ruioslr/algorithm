/*
* AVL自平衡树： 添加或移除节点时，AVL树会尝试保持自平衡。任意一个节点（不论深度）的左子树和右子树高度最多相差1。添加或移除节点时，AVL树会尽可能尝试转换为完全树。
*/

import {Node, BST} from './BST';


// 覆盖 insert, insertNode, removeNode方法，其它方法复用
class AVLTree extends BST{
  // 计算节点的高度
  getNodeHeight = (node) => {
    if(node === null) {
      return -1;
    }

    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // 计算平衡因子
  getBalanceFactor = (node) => {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }


}


