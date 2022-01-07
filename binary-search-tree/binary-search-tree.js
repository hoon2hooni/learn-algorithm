{
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor(value) {
      this.root = null;
    }

    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
        return;
      }

      if (value <= this.root.value) {
        this.insertLeft(value, this.root);
      } else {
        this.insertRight(value, this.root);
      }
    }

    insertLeft(value, parent) {
      if (parent.left === null) {
        parent.left = new Node(value);
        return;
      }
      if (value <= parent.left.value) {
        this.insertLeft(value, parent.left);
      } else {
        this.insertRight(value, parent.left);
      }
    }

    insertRight(value, parent) {
      if (parent.right === null) {
        parent.right = new Node(value);
        return;
      }

      if (value <= parent.right.value) {
        this.insertLeft(value, parent.right);
      } else {
        this.insertRight(value, parent.right);
      }
    }
  }

  const myBST = new BST();

  myBST.insert(4);
  myBST.insert(3);
  myBST.insert(5);
  myBST.insert(7);
  console.log(myBST.root.right);
}
