// 二叉查找树

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }    
}

class BST {
    constructor(){
        this.root = null;
    }

    insert = (data) => {
        const newNode = new Node(data, null, null);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        let parent = null;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = newNode;
                    break;
                }
            }else {
                current = current.right;
                if(current === null){
                    parent.right = newNode;
                    break;
                }
            }

        }
    }

    order = (node) => {
        this.order(node.left);
        
        this.order(node.right)
    }

}