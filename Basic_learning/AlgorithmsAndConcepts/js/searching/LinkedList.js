function LinkedList() {
    // Linked List is empty
    let length = 0;
    let head = null;

    // Creating the node
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    // Returns of length of linked lsit
    this.size = () => length;

    // return current head
    this.head = () => head;

    // Adding a node
    this.add = function (element) {
        let node = new Node(element);
        // Check if head is empty if empty insert node at head position
        if (head === null) head = node;
        else {
            // Pointing a new node to head
            let currentNode = head;
            // traverse till found an next as null to put an new node
            while (currentNode.next) {
                currentNode = currentNode.next; //  CurrentNode will point to the empty position
            }
            // Insert a node at currentNode
            currentNode.next = node;
            length++;
        }
    };

    // Remove a node from linked list
    this.remove = function (element) {
        let currentNode = head;
        let previousNode;

        if (currentNode.element === element) head = currentNode.next;
        else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    // Check if linked list is empty
    this.isEmpty = () => length === 0 ? 'Linked List is empty' : 'Have some items';

    // return posittion of an element
    this.position = (element) => {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return `Found at position ${index}`;
            }
            currentNode = currentNode.next;
        }
        return 'Not Found';
    }

    //  Found element at certain position
    this.elementPosition = function (index) {
        let currentNode = head;
        let count = 0;

        if (index > length) {
            return `Nothing at ${index}`;
        } else {
            while (count < index) {
                count++;
                currentNode = currentNode.next;
            }
            return `Element at ${index} is ${currentNode.element}`;
        }
    }

    // Insert element at specific position
    this.addAtPosition = function (index, element) {
        let node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) return 'Invalid Position';
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    // Remove from a specific position
    this.removeFromPosition = function (index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= length) return 'Invalid Position';
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }

    // Display Linked list
    this.display = () => {
        let currentNode = head;
        let response = '';
        while (currentNode) {
            response += currentNode.element + " ";
            currentNode = currentNode.next;
        }
        return response;
    }
}
const linkedList = new LinkedList();
linkedList.add('Rishabh');
linkedList.add('Agarwal');
linkedList.add('Shubh');
linkedList.add('Rishabh');
linkedList.addAtPosition(1, 'Vasu');
console.log(linkedList.display());
console.log(linkedList.size());
console.log(linkedList.elementPosition(0));
// console.log(linkedList.size());
// console.log(linkedList.removeFromPosition(0));
// linkedList.display();