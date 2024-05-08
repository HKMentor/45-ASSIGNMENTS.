//Assignment 13 //Assignment 45
//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle
var transportation = ["Honda Motorcycle", "Harley Motorcycle", "Car", "scoter"];
transportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "."));
});
