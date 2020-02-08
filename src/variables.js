/**
 * Declare the variables "a" and "b" to be two numbers
 * "a" should be 8
 * "b" should be 3
 * "a" should always be on the left side of an equation
 *
 * 1. Add them together in a variable named "sum"
 * 2. Subtract them in a variable named "difference"
 * 3. Multiply them in a variable named "product"
 * 4. Divide them in a variable named "quotient"
 */

// Define "a" below
a = 8 ;
// Define "b" below
b = 3 ;
function sum(a,b) { return a+b;}
function difference(a,b){return a-b;}
function product (a,b){return a*b;}
function quotient(a,b){return a/b;}

console.log('sum:', sum(a,b)); // 11

console.log('difference:', difference(a,b)); // 5


console.log('product:', product(a,b)); // 24


console.log('quotient:', quotient(a,b)); // 2.66 (etc)

console.log('\n===\n'); // Ignore this line, makes the program output more readable


/**
 * Reassign the "x" and "y" variables before each console.log() to make each print the boolean true
 */

let x = 0;
let y = 1;
y=2
console.log('x+2 === y:', x +2=== y);


x=4
console.log('x > y', x > y);

x=-1
y=-1
console.log('x === -1 && y === x:', x === -1 && y === x);

x=2
y=24
console.log('x > 0 && y === 24:', x > 0 && y === 24);

x=10
console.log('!(x === 24):', !(x === 24));

x=2
y=4
console.log('x * 2 === y', x * 2 === y);
