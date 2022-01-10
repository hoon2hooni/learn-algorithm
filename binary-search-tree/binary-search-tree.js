{
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    insert(value, node = this.root) {
      if (this.root === null) {
        this.root = new Node(value);
        return;
      }

      if (node === null) {
        return new Node(value);
      }

      if (value <= node.value) {
        node.left = this.insert(value, node.left);
      } else {
        node.right = this.insert(value, node.right);
      }
      return node;
    }

    insertIteratively(value) {
      const nodeInserted = new Node(value);
      if (!this.root) {
        this.root = nodeInserted;
        return;
      }
      let currentRoot = this.root;
      let flag = true;
      while (flag) {
        if (value > currentRoot.value) {
          if (!currentRoot.right) {
            currentRoot.right = nodeInserted;
            flag = false;
          } else {
            currentRoot = currentRoot.right;
          }
        } else {
          if (!currentRoot.left) {
            currentRoot.left = nodeInserted;
            flag = false;
          } else {
            currentRoot = currentRoot.left;
          }
        }
      }
    }

    search(value, node = this.root) {
      if (this.root === null) {
        throw new Error("this is empty binary search tree");
      }
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this.search(value, node.left);
      } else if (value > node.value) {
        return this.search(value, node.right);
      } else {
        return true;
      }
    }
  }
  const myBST = new BST();
  myBST.insert(5);
  myBST.insert(3);
  myBST.insert(4);
  myBST.insert(2);
  myBST.insert(1);
  myBST.insert(7);
  myBST.insert(8);
  myBST.insert(6);
  console.log(myBST.search(6));
}
