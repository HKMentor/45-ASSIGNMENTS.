//Assignment  45  //Assignment 45...........
// /Cars: Write a function that stores 
//information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an 
//arbitrary number of keyword arguments. Call the function with the required
// information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
function carInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Adding other name-value pairs provided as arguments
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var carDetails = carInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
// Print the Object that's returned
console.log(carDetails);
console.log("THE END");
