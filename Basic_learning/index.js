// Examples of closure
function outer() {
    var a = 50;

    function inner() {
        console.log(a)
    }
    return inner;
}
outer()(); // It means we call calling the inner function directly

// Description - In the above mention inner function forms a closure with the outer function and has access to the variables of the outer scope that is closure.

// Other way
function outer1(b) {
    var a = 100;

    function inner1() {
        console.log(a, b)
    }
    return inner1;
}
var z = outer1("Hello World")
z();
// Explanation : In this function behave same as the above one because "b" is in the outer scope of inner function

// Othe way
function outer2() {
    function inner2() {
        console.log(a)
    }
    // var a = 9999;
    let a = 9999;
    return inner2;
}
let a = 187878;
outer2()();
// Explanation: In this case we are declaring the variables after the function is declared but it's still in the outer scope of function so it's doesn't matter and it will behave same with "let" also and also if we have a conflicting name with a which is 187878 but it still prints the value 9999 because it still points to the same reference of a for the inner function (it's in outer scope). If we remove the "let a = 9999" from the inner function then it will print 187878 because it's unable to find the value of a inside it's outer scope so it will go a little step deep (means search outside the outer2 function) and if it's find that print that value, otherwise it gives reference error.

// Another example
function outest() {
    let c = 200;

    function outer(b) {
        function inner() {
            console.log(a, b, c)
        }
        return inner;
    }
    return outer;
}
outest()('I am JS')();
// Explain : As we can see "c" is still inside the scope of inner which is forming closure wiht outest function

// Advantage of Closures -> Memoize, Data Hiding, setTimeout etc
// Disadvantage is : Memory leaks, Usage of memory is very high closures doesn't collected by garbage collected
// Data Hiding : When we want to use a variable inside a function and not accessible from outside
// Example
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count)
    }
}
var counter1 = counter()
counter1();
counter1();
counter1();
var counter2 = counter()
counter2();
// If we call this counter1() again and again it will increment the values like 1, 2, 3, 4 and so on
// If we store result of counter() in other varibale then it will again start from 1, 2, 3


// Best way to use this is by using constructor function
function consFunction() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count)
    }
    this.decrementCounter = function() {
        count--;
        console.log(count)
    }
}
var counter3 = new consFunction()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.decrementCounter()
counter3.decrementCounter()

// Clsoures with Event Listeners
// function attach() {
//     let count = 0;
//     console.log(document)
//     const buttonClick = document.getElementById('clickMe');
//     console.log(buttonClick)
//     buttonClick.addEventListener("click", function clicked() {
//         console.log("Button Clicked", ++count);
//     });
// }
// attach();
// Here function clicked is forming a closure with function attach (with it's outer scope)

// Example for functional programming
const radius = [2, 4, 6, 8]

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

function calculate(radius, logic) {
    let result = [];
    for (let i = 0; i < radius.length; i++) {
        result.push(logic(radius[i]))
    }
    return result;
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))

// OR now this calculate function will be available to all the created arrays
// Array.prototype.calculate(logic) {
//     let result = [];
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]))
//     }
//     return result;
// };
// radius.calculate(area)

// Example for call() method
let name = {
    firstName: 'Rishabh',
    lastName: 'Agarwal',
    printName: function(age, work) {
        console.log(this.firstName + " " + this.lastName + " " + age + " work as " + work) // this points to the current object
    }
}
name.printName(25, 'labour');
// Now if we have other object which also want to prints the name So we can borrow that fucntion from "name" using the "call()" method
let other = {
    firstName: "Rishi",
    lastName: "Agarwal"
}
name.printName.call(other, 28, 'Worker') // In call() we pass the reference to the 'this' variable

// Apply method only difference between call() and apply() method is that how we pass the arguments into the functions
name.printName.apply(other, [45, 'Engineer'])

// Bind method it creates the copy if the fucntion and assigned into that can be used as a functin later because bind() method returns function 
// Example for bind()
let details = name.printName.bind(other, 25, 'labour')
    // if we print details then it will print the function only (bind returns function)
console.log(details)
    // In order to use that function we need to invoke the fucntion
details()

// Polyfill : We can say that it's a fallback for the browser. let say if browser doesn't have the bind function.
// NOTE: Fro a user defined function to be accessed by all other function it has to be written as Function.prototype.FunctionName = function() { }
// Example for polyfill for bind()
let user = {
    name: 'Rishabh'
}
let printUser = function(work, experience, company) {
    console.log(this.name + " work as " + work + " with experience " + experience + " at " + company)
};
// Below function behaves as a bind() because it recives a object and perform same functionality as bind function
Function.prototype.myBind = function myBind(...args) {
    let obj = this // because this has the current reference for the object
    let params = args.slice(1) // It will remove the first object from the args
    return function(...args2) { // It can have as many inputs 
        obj.apply(args[0], [...params, ...args2]) // Used apply because we recieve multiple inputs in array list
    }
}

let userData = printUser.myBind(user, 'Software Developer', 2)
userData("Capgemini");

// Function Curry or Currying
let multiply = function(x, y) {
    console.log(x * y);
};
// That's a simple function now by using bind we will create the copy of function as many as we want
let multiplyByTwo = multiply.bind(this, 2) // If we pass like this 2 will be treated as x value
multiplyByTwo(50); // Here 50 will be considered as y
let multiplyByThree = multiply.bind(this, 2, 10) // Here 2 will be treated as x and 10 will be treated as y
multiplyByThree();

// Function curry: We make a copy of mulitply() method and we create more methods out of it by pre setting some arguments inside the function.
// Function curring by using closures
let add = function(x) {
    return function(y) {
        console.log(x + y);
    }
}
let addition = add(33);
addition(45);

// Prototype : It is an object that attaches to eac and every array, function, object. 
// Example
let object1 = {
    name: 'Rishabh',
    city: 'Rudrapur',
    printDetail: function() {
        console.log(this.name + " from " + this.city);
    }
}
let object2 = {
    name: 'Rishi'
};
// Never do this
object2.__proto__ = object1;
// We are assigning the object1 to object2 proto. Now if we want to access the city inside the object2 first it will look inside the object2 if it's not present there it will look inside the proto that is object1. And if we call object2.printDetail() it will print "Rishi from Rudrapur" it will find name inside object2 it's find name inside object2 and then it's find city inside object2 but unable to find so it goes to prototype chain and looks inside object1 it find there and prints the "city" because "this" is referencing to the city.

// Event bubbling 
// In this below example if we click the #child then the sequence will be 
// Child Clicked -> Parent Clicked -> Grand parent clicked because event bubbling first trigger the inner most elements and then the outer most elements. IT MOVES UP THE HIERARCHY
// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log('Grand parent clicked');
// })
// document.querySelector("#parent").addEventListener('click', () => {
//     console.log('Parent clicked');
// })
// document.querySelector("#child").addEventListener('click', () => {
//     console.log('Child clicked');
// })

// Event Capturing
// In this below example if we click the #child then the sequence will be 
// Grand Parent -> Parent clicked -> Child clicked because event capturing first handles the outer most elements and then the inner most elements. IT MOVES DOWN THE HIERARCHY
// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log('Grand parent clicked');
// }, true)
// document.querySelector("#parent").addEventListener('click', () => {
//     console.log('Parent clicked');
// }, true)
// document.querySelector("#child").addEventListener('click', () => {
//     console.log('Child clicked');
// }, true);
// Event bubbling is the default phenomeon

// Event Delegation is implemented by using event bubbling
// document.querySelector('#categories').addEventListener('click', (e) => {
//     if (e.target.tagName == 'li') { // Check weather id is a part of li list or not
//         console.log(e.target.id); // This event will have all the details inside the target
//     }
// });
// document.querySelector('#form').addEventListener('click', (e) => {
//     console.log(e);
//     if (e.target.dataset.uppercase != undefined) {
//         e.target.value = e.target.value.toUpperCase();
//     }
// });

// Debouncing
let counters = 0;
const getData = () => {
    console.log('Clicked', counters);
};

// This callApi function is called every after there is a pause between two key press is greater than 300 miliseconds. We are setting a timer for every 300ms.
const debounceMethod = function(func, delay) { // returns a function
    let timer;
    let context = this;
    let args = arguments;
    return function() {
        clearTimeout(timer); // Clearing the timer if user is pressing keys very fast.
        timer = setTimeout(() => { // Setting the timer for 300ms means if timer between two key press is greater than 300ms then only call back function is called in this case is func.
            func.apply(context, args);
        }, delay)
    }
};
// This search function call every time when a key is pressed
let search = debounceMethod(getData, 300);

// Throttling: Optimization of the web pages is done by creatting the throttle function which means a function call is made after a certain limit of a time.
// const expensiveFunction = () => {
//     console.log("Throttling");
// };

// const throttle = function(expensiveFunction, limit) {
//     let flag = true; // we are setting a flag to call a function after a certain delay that flag is made false after the function call is made.
//     return function() { // This function is forming a closure with flag so that it will not initialize every time.
//         let context = this;
//         let args = arguments;
//         if (flag) { // We check if a flag is true or not. If true maake a call for function. If we initialize the flag inside the function then it will be initialized again and again.
//             expensiveFunction().apply(context, args);
//             flag = false;
//             setTimeout(() => { // After the limit time the function call will be made
//                 flag = true;
//             }, limit);
//         }
//     }
// };

// window.addEventListener("resize", betterExperience);
// const betterExperience = throttle(expensive, 1000);

// Async: It enables us to write promise bases code as it was synchronous, but without blocking the execution context. It operates asynhcronously via event loop. Async always return a value. Using async promise will be returned if not than js automatically wraps it into a resolved promise. Example below
// async function asyncFunction() {
//     return "I am async function";
// };
// asyncFunction.then(alert);

// Await: This operator is used to wait for promise. It can only be used inside the async block only. This makes js wait until promise value is returned. It only makes async block to wait and not the whole program execution. Example:
// async function firstAsync() {
//     let promise = new Promise((accept, reject) => {
//         setTimeout(() => {
//             accept("Now it's done");
//         }, 1000);
//         let result = await promise;
//         alert(result);
//     });
// };
// firstAsync();

// Reduce: When we want output as a single response
const persons = [
    { firstName: 'Rishabh', age: 25 },
    { firstName: 'Rishi', age: 52 },
    { firstName: 'Ris', age: 25 },
    { firstName: 'Rishabh', age: 50 }
];
const out = persons.reduce(function(res, current) {
    if (current.age < 30) {
        console.log(current.firstName);
        res[current.firstName] = current.age;
    }
}, {});

console.log(out)