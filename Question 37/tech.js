//Assignment  37 //Assignment 45...........
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message
function makeShirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You've ordered a ".concat(size, " sized shirt with the message: \"").concat(message, "\"."));
}
;
// Making large shirt with default message
makeShirt1();
// Making medium shirt with default message
makeShirt1("Medium");
// Making shirt of any size with a different message
makeShirt1("Small", "Keep Coding!");
console.log('THE END');
