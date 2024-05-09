// Assignment 15  //Assignment 45........
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
// Initial guest list
var guestList = ["NEHA", "KANWAL", "RAHEELA"];
guestList.forEach(function (guest) {
    console.log("".concat(guest, ": I would be honored if you could join me for dinner."));
});
console.log("\nRAHEELA will not come because of some urgent work!");
// Update guest list
guestList.splice(2, 1, "Maryam", "Hania");
console.log(guestList);
// Send invitations to the updated guest list
guestList.forEach(function (guest) {
    console.log("".concat(guest, ": I would be honored if you could join me for dinner."));
});
console.log("The END");
