'use strict'

const linkedList = function () {
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) head = node;
        else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    this.reverse = function () {
        let prev = null;
        let currentNode = head;
        while (currentNode) {
            let next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return prev;
    }

    this.display = function () {
        let currentNode = head;
        let response = '';
        while (currentNode) {
            response += currentNode.element + " -> ";
            currentNode = currentNode.next;
        }
        return response + null;
    }
}

const list = new linkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.display());
console.log(list.reverse());