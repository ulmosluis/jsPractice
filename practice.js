// A simple function that adds two numbers
function add(a, b) {
    return a + b; // Returns the sum of a and b
}

// A function that calculates the average of two numbers using another function
function average(a, b, fnAdd) {
    // Calls the provided function (fnAdd) to add the numbers, then divides by 2
    return fnAdd(a, b) / 2;
}

// Example usage of the add and average functions
console.log(average(1, 2, add)); // Output: 1.5

// Function Expression: Assigning a function to a variable
const multiply = function(a, b) {
    return a * b; // Returns the product of a and b
};
console.log(multiply(3, 4)); // Output: 12

// Arrow Function: A shorter way to write functions
const subtract = (a, b) => a - b; // Subtracts b from a
console.log(subtract(10, 4)); // Output: 6

// Function with Default Parameters
function greet(name = "Guest") {
    // If no name is provided, "Guest" will be used as the default
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: "Hello, Guest!"
console.log(greet("Alice")); // Output: "Hello, Alice!"

// Higher-Order Function: A function that takes another function as an argument
function operate(a, b, operation) {
    // Calls the provided operation function with a and b
    return operation(a, b);
}
console.log(operate(5, 3, add)); // Output: 8 (uses the add function)
console.log(operate(5, 3, multiply)); // Output: 15 (uses the multiply function)

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!"); // Output: This function runs immediately!
})();

// Recursive Function: A function that calls itself
function factorial(n) {
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)

// Function using the arguments object
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; // Adds all arguments passed to the function
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Sorting a list of products by price or name
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
];

// Function to sort products by price
function sortByPrice(products) {
    return products.sort((a, b) => a.price - b.price); // Ascending order by price
}
console.log(sortByPrice(products)); 
// Output: [{ name: "Phone", price: 500 }, { name: "Tablet", price: 700 }, { name: "Laptop", price: 1000 }]

// Function to sort products by name
function sortByName(products) {
    return products.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order by name
}
console.log(sortByName(products)); 
// Output: [{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }, { name: "Tablet", price: 700 }]

function sortByPriceDescending(products) {
    return products.sort((a, b) => b.price - a.price);
}
console.log(sortByPriceDescending(products));
// Output: [{ name: "Laptop", price: 1000 }, { name: "Tablet", price: 700 }, { name: "Phone", price: 500 }]


function sortByNameDescending(products) {
    return products.sort((a, b) => b.name.localeCompare(a.name));
}
console.log(sortByNameDescending(products));
// Output: [{ name: "Tablet", price: 700 }, { name: "Phone", price: 500 }, { name: "Laptop", price: 1000 }]
// Function to sort products by name in descending order