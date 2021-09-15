function Stack() {
    this.count = 0;
    this.storage = {};

    // Pushing element in stack
    this.push = function (element) {
        this.storage[this.count] = element;
        this.count++;
    }

    // Removing element from a stack
    this.pop = function () {
        if (this.count === 0) return 'Stack is empty';
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Size of stack
    this.size = function () {
        return this.count;
    }

    // Peek Element: return top element of stack
    this.peek = function () {
        if (this.count === 0) return 'Stack is Empty';
        return this.storage[this.count - 1];
    }

    // Displaying stack elemnets
    this.display = function () {
        console.log(this.storage);
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push('Rishabh');
stack.display();
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

// Check palindrom using stack
// const word = 'NITIN';
// let reverse = '';
// [...word].forEach((letter) => stack.push(letter));
// [...word].forEach(() => reverse += stack.pop());
// const result = word === reverse ? 'PALINDROME' : 'NOT PALINDROME';
// console.log(result);
