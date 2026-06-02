function BinaryTree() {

    this.root = null;

    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    let idx = -1;

    function buildTree(nodes) {
        idx++;

        if (nodes[idx] === null) {
            return null;
        }

        let newNode = new Node(nodes[idx]);

        newNode.left = buildTree(nodes);
        newNode.right = buildTree(nodes);

        return newNode;
    }

    this.createTree = function(arr) {
        this.root = buildTree(arr);
        return this.root;
    }

    this.preOrder=function(node) {
        if(node === null) {
            return;
    }
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    this.inOrder=function(node) {
        if(node === null) {
            return;
    }
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
        
    }

     this.postOrder=function(node) {
        if(node === null) {
            return;
    }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    this.levelofOrder=function(root){
        if(root === null){
            return null;
        }
        let queue = [];
        queue.push(root);
        queue.push(null);

         let result = "";

        while(queue.length > 0){
            let currNode = queue.shift();
            if(currNode === null){
                console.log(result.trim());
                result = "";
                if(queue.length === 0){
                    break;
            }
            else{
                queue.push(null);
            }
        }
            else {

                result += currNode.data + " ";

                if(currNode.left !== null) {
                    queue.push(currNode.left);
                }

                if(currNode.right !== null) {
                    queue.push(currNode.right);
                }
            }

        }
    }

    this.countNodes = function(node){
        if(node === null){
            return 0;
        }
        let leftCount = this.countNodes(node.left);
        let rightCount = this.countNodes(node.right);
        return leftCount + rightCount + 1;
    }

    this.sumofNodes = function(node){
        if(node === null){
            return 0;
        }
        let leftSum = this.sumofNodes(node.left);
        let rightSum = this.sumofNodes(node.right);
        return leftSum + rightSum + node.data;
    }

     this.heightNodes = function(node){
        if(node === null){
            return 0;
        }
        let leftheight = this.heightNodes(node.left);
        let rightheight = this.heightNodes(node.right);
        return Math.max(leftheight,rightheight)+1;
    }

    this.diameter = function(node){
        if(node === null){
            return 0;
        }
        let leftDiameter = this.diameter(node.left);
        let rightDiameter = this.diameter(node.right);
        return Math.max(leftDiameter, rightDiameter, this.heightNodes(node.left) + this.heightNodes(node.right) + 1);
    }
}

const tree = new BinaryTree();

tree.createTree([1, 2, null, null, 3, 4, null, null, 5, null, null]);

console.log("PreOrder traversal");
tree.preOrder(tree.root);
console.log("InOrder traversal");
tree.inOrder(tree.root);
console.log("PostOrder traversal");
tree.postOrder(tree.root);
console.log("Level Order Traversal");
tree.levelofOrder(tree.root);
console.log("Total number of nodes in the tree: " + tree.countNodes(tree.root));
console.log("Total sum of nodes in the tree: " + tree.sumofNodes(tree.root));
console.log("Height of the tree: " + tree.heightNodes(tree.root));
console.log("Diameter of the tree: " + tree.diameter(tree.root));
