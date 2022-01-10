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
      this.dfsVisited = [];
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

    saerchIteratively(value) {
      if (!this.root) {
        throw new Error("this is empty binary search tree");
      }
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value > current.value) {
          current = current.right;
        } else if (value < current.value) {
          current = current.left;
        } else {
          return true;
        }
      }
      return found;
    }

    bfs() {
      const queue = [];
      const visited = [];
      // breadth first search
      // 방문 -> 뿌리 -> (뿌리 자식들 queue에 추가)
      // 깊이 level 1 전부 탐색 ->
      // 깊이 level 2 전부 탐색

      if (!this.root === null) {
        return visited;
      }

      queue.push(this.root);
      //In javascript, empthy array is not falsy
      while (queue.length) {
        const currentNode = queue.shift();
        visited.push(currentNode);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      return visited;
    }

    dfs(node = this.root) {
      if (!this.root) {
        return this.dfsVisited;
      }
      this.dfsVisited.push(node.value);
      if (node.left) this.dfs(node.left);
      if (node.right) this.dfs(node.right);
    }
  }

  const myBST = new BST();
  const testArray = [5, 3, 7, 1, 4, 6, 8];
  testArray.forEach((mem) => myBST.insert(mem));
  myBST.dfs();
  console.log(myBST.dfsVisited);
  console.log("this is", myBST.saerchIteratively(6));
}
