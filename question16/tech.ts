//ASsignment 16 //Assignment 45
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append()
// to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
//initial guest list//
let guestList = ["neha","kanwal" ,"hooria"];
console.log(guestList[0] + ": i would like to invite you to join me at dinner.");
console.log(guestList[1] + ": i would like to invite you to join me at dinner.");
console.log(guestList[2] + ": i would like to invite you to join me at dinner.");
console.log("/n fatima will not come because of some urjent work /n" );

//updated guest list//
let  guest= ["maryam","hania" , "zainab"];
guest.pop()
console.log(guest)
guest.push("Hassan","Hussain");
console.log(guest)
console.log(guest[0] + ": i would like to invite you to join me at dinner.");
console.log(guest[1] + ": i would like to invite you to join me at dinner.");
console.log(guest[2] + ": i would like to invite you to join me at dinner.");
console.log(guest[3] + ": i would like to invite you to join me at dinner.");
console.log('THE END');





