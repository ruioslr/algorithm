/*
* 红黑树：
*   1，每个节点不是红的就是黑的
*   2，树的根节点是黑的
*   3，所有叶节点都是黑的（用NULL引用表示的节点）
*   4，如果一个节点是红的，那么它的两个子节点都是黑的
*   5，从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点
*   由5推出： 如果一个结点存在黑色子结点，那么该结点肯定有两个子结点
*
*   红黑树的平衡是：黑色完美平衡
*
*
*   左旋：以某个结点作为支点(旋转结点)，其右子结点变为旋转结点的父结点，右子结点的左子结点变为旋转结点的右子结点，左子结点保持不变。如图3。
    右旋：以某个结点作为支点(旋转结点)，其左子结点变为旋转结点的父结点，左子结点的右子结点变为旋转结点的左子结点，右子结点保持不变。如图4。
    变色：结点的颜色由红变黑或由黑变红。

    注意： 旋转操作不会影响旋转结点的父结点
          左旋只影响旋转结点和其右子树的结构，把右子树的结点往左子树挪了。
          右旋只影响旋转结点和其左子树的结构，把左子树的结点往右子树挪了。

    插入的节点是 **红色**

    红黑树总是通过旋转和变色达到自平衡

    链接：https://www.jianshu.com/p/e136ec79235c
    来源：简书
*/


import {Node, BST} from './BST';

const Colors = {
  RED: 'red',
  BLACK: 'black'
}


class RedBlackTree extends BST{
  insert = (key) => {
  /*
   思路： 1， 查找插入的位置
         2， 插入后自平衡
  */

   // 情景3: 插入节点的父节点为黑色节点
  // 情景4： 插入节点的父节点为红色节点

    if(this.root == null) {
      return this.root = new RedBlackNode(key)
    }

  }

  insertNode = (node, key) => {

  }
}



class RedBlackNode extends Node{
  constructor(key) {
    super(key);
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
