//Assignment 24  //Assignment 45.........
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array 
console.log("HEllo WOrLD");
// Tests for equality and inequality with strings
console.log("Equality & Inquality Answer.");
//EQUALITY.............
console.log('Apple' === 'Apple'); //True
console.log('Banana' === 'Banana'); //False
//INQUaLITY
console.log('Apple' !== 'Apple'); //True
console.log('Banana' !== 'Banana'); //False
// Tests using the lower case function
console.log("Equality & Inquality lowercase Answer.");
//EQUALITY WITH LOWER CASE............
console.log('Hello'.toLowerCase() === 'hello'); //True
console.log('Hello'.toLowerCase() === 'Hello'); //False
//INQUALITY WITH LOWER CASE..........
console.log('Phython'.toLowerCase() !== 'java'); //True
console.log('Phython'.toLowerCase() !== 'phython'); //False
// Numerical tests
console.log("Numerical Answer.");
let num1 = 10;
let num2 = 5;
console.log('Equality test:', num1 === num2); // false
console.log('Inquality test:', num1 !== num2); // true
console.log('Greater than test:', num1 > num2); // true
console.log('less than test:', num1 < num2); // false
console.log('Greater than or equal to test:', num1 >= num2); // true
console.log('less than or equal to test:', num1 <= num2); // false
// Tests using "and" & "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
// Test whether an item is  in an array
console.log("Item ARray Answer.");
const fruits = ['apple', 'banana', 'orange'];
//ITEM IN ARRAY..........
console.log(fruits.includes('apple')); //True
console.log(fruits.includes('grape')); //False
// Test whether an item is not in an array
console.log(!fruits.includes('banana')); //False
console.log(!fruits.includes('grape')); //true
console.log("THE END");
export {};
