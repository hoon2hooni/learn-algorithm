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
  }
  const myIterateBST = new BST();

  myIterateBST.insertIteratively(5);
  myIterateBST.insertIteratively(3);
  myIterateBST.insertIteratively(6);
  myIterateBST.insertIteratively(7);
  myIterateBST.insertIteratively(2);
  myIterateBST.insertIteratively(4);
  myIterateBST.insert(6.2);
  console.log(myIterateBST);
}
