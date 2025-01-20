// 1. Algorithmic Thinking: 
// Write pseudo-code for a function that finds the first n prime
// numbers.
function firstprimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        
        for (let j = 2; j <= Math.sqrt(i); j++) { // Optimization: Check up to √i
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            console.log(i);
        }
    }
}

// Example usage:
const n = parseInt(prompt("Enter a number: "));
firstprimes(n);

// 2. Data Structures:
// Write pseudo-code for a function that implements a basic Queue with
// enqueue and dequeue operations.

class Queue {
    constructor() {
        this.queue = []; // Initialize the queue as an empty array
    }

    // Enqueue operation: Adds an element to the end of the queue
    enqueue(element) {
        this.queue.push(element);
    }

    // Dequeue operation: Removes and returns the first element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Peek operation: Returns the first element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0];
    }
}

// Example usage:
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());    // Output: 10
console.log(q.dequeue()); // Output: 10
console.log(q.dequeue()); // Output: 20
console.log(q.isEmpty()); // Output: false
console.log(q.dequeue()); // Output: 30
console.log(q.isEmpty()); // Output: true




// 3. Recursion:
// Write pseudocode for finding the factorial of a number using
// recursion.
function factorial(n) {
    if (n <= 1) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

// Example usage
let number = 5;
let value = factorial(number);
console.log("Factorial of", number, "is", value);



// 4. Sorting Algorithms:
// Write pseudo-code for the Bubble Sort algorithm.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
let sortedArray = bubbleSort(myArray);
console.log("Sorted array:", sortedArray);

// 5. Searching Algorithms:
// Write pseudo-code for a function that performs binary search on a
// sorted array. Using js 
function binarySearch(arr, targetVal) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === targetVal) {
            return mid;
        }

        if (arr[mid] < targetVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

let myArray1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let myTarget = 15;

let result = binarySearch(myArray1, myTarget);

if (result !== -1) {
    console.log("Value", myTarget, "found at index", result);
} else {
    console.log("Target not found in array.");
}