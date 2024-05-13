//Assighment 18  //Assignment 45........
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Amerca", "Burj khalifa", "Naran", "New York", "Turkey"];
// Print the array in its original order
console.log("Original Order:");
console.log(places);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], places, true).sort());
// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], places, true).sort().reverse());
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("\nBack to Original Order:");
console.log(places);
// Sort the array so it's stored in alphabetical order
places.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(places);
// Sort to change the array so it's stored in reverse alphabetical order
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
console.log("THE END");
