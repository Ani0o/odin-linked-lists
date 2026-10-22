class Node {
  value = null
  nextNode = null
}

class LinkedList {
  list = {};

  append(value) {
    const node = new Node();
    node.value = value;
    let temp = this.list;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = node;
  }
  
  prepend(value) {
    const node = new Node();
    node.value = value;
    let temp = this.list;
    if (Object.hasOwn(temp, 'nextNode')) {
      node.nextNode = temp.nextNode;
      temp.nextNode = node;
    } else {
      temp.nextNode = node;
    }
  }

  size() {
    let count = 0;
    let temp = this.list;
    while(temp.nextNode != null) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }

  head() {
    if (Object.hasOwn(this.list, 'nextNode')) {
      return this.list.nextNode.value;
    } else {
      return undefined;
    }
  }

  tail() {
    let temp = this.list;
    if (Object.hasOwn(temp, 'nextNode')) {
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      return temp.value;
    } else {
      return undefined;
    }
  }

  at(index) {
    let temp = this.list;
    if (Object.hasOwn(temp, 'nextNode')) {
      for (let i = 0; i <= index; i++) {
        temp = temp.nextNode;
        if (temp == null) {
          return undefined;
        }
        if (temp.nextNode == null && i == index) {
          return temp.value;
        }
      }
      return temp.value;
    } else {
      return undefined;
    }
  }

  pop() {
    let temp = this.list;
    if (Object.hasOwn(temp, 'nextNode')) {
      if (temp.nextNode == null) return undefined;
      const value = temp.nextNode.value;
      temp.nextNode = temp.nextNode.nextNode;
      return value;
    } else {
      return undefined;
    }
  }

  contains(value) {
    let temp = this.list;
    if (Object.hasOwn(temp, 'nextNode')) {
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        if (temp.value == value) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  findIndex(value) {
    let temp = this.list;
    let index = 0;
    if (Object.hasOwn(temp, 'nextNode')) {
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        if (temp.value == value) {
          return index;
        }
        index++;
      }
      return -1;
    } else {
      return -1;
    }
  }

  toString() {
    let temp = this.list;
    let str = '';
    if (Object.hasOwn(temp, 'nextNode')) {
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        str += `( ${temp.value} ) -> `
        if (temp.nextNode == null) {
          str += 'null';
        }
      }
      return str;
    } else {
      return str;
    }
  }

  insertAt(index, ...values) {
    let temp = this.list;
    if (index < 0 || index > this.size()) throw new RangeError();
    if (Object.hasOwn(temp, 'nextNode')) {
      for (let i = 0; i < index; i++) {
        temp = temp.nextNode;
      }
      let originalList = temp.nextNode;
      values.forEach(value => {
        const node = new Node();
        node.value = value;
        temp.nextNode = node;
        temp = temp.nextNode;
      });
      temp.nextNode = originalList;
    } else {
      if (index === 0) {
        values.forEach(value => this.append(value));
      } else {
        throw new RangeError();
      }
    }
  }

  removeAt(index) {
    let temp = this.list;
    if (index < 0 || index >= this.size()) throw new RangeError();
    if (Object.hasOwn(temp, 'nextNode')) {
      let prev;
      for (let i = 0; i <= index; i++) {
        prev = temp;
        temp = temp.nextNode;
      }
      prev.nextNode = temp.nextNode;
    } else {
      throw new RangeError();
    }
  }
}

/*
const list = new LinkedList();
list.append(56);
list.append(5);
list.append(6);
list.prepend(67);
console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains(56));
console.log(list.findIndex(5));
console.log(list.toString());
list.insertAt(1, 1, 2, 3);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
*/

export default LinkedList;
