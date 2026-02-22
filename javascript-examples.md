# Javascript fundamentals

### 1. Print to console
console.log("Hello, World!");

### 2. Variables and Data Types
let x = 10;          // Number
const y = 3.14;      // Number (constant)
let name = "Alice";  // String
let isValid = true;  // Boolean

### 3. Arrays and indexing
let myArray = [1, 2, 3, 4];
console.log(myArray[0]);   // 1
myArray.push(5);           // Add element

### 4. Objects
let myObject = {a: 1, b: 2};
console.log(myObject.a);       // 1
myObject.c = 3;                // Add property

### 5. Conditional statements
if (x > 5) {
    console.log("x is greater than 5");
} else if (x === 5) {
    console.log("x is 5");
} else {
    console.log("x is less than 5");
}

### 6. Loops
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}

while (x > 0) {
    console.log(x);
    x -= 1;
}

### 7. Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Bob"));

### 8. Array methods (map)
let squares = myArray.map(n => n ** 2);  // [1, 4, 9, 16, 25]
console.log(squares);

### 9. Exception handling
try {
    let result = 10 / 0;
} catch (error) {
    console.log("Error occurred.");
}

### 10. Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const person = new Person("Eve");
console.log(person.greet());