//1

//To convert a string to an integer in JavaScript, you can use the parseInt() function or the Number() constructor.

//2

function stringToInteger(str) {
  return parseInt(str, 10); // The second argument specifies the base (10 for decimal).
}

var integerResult = stringToInteger("123"); // integerResult will be 123 as an integer.


//3


//To convert a string containing a decimal number to a floating-point number in JavaScript, you can use the parseFloat() function or the Number() constructor.

//4
//To check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion, you can use conditional statements or validation functions. Here's an example using parseInt():


//5
function canConvertToInteger(str) {
  // Use parseInt with a radix to check if the conversion is successful.
  return !isNaN(parseInt(str, 10));
}

function canConvertToFloat(str) {
  // Use parseFloat to check if the conversion is successful.
  return !isNaN(parseFloat(str));
}

var str1 = "123";
var str2 = "3.14";

console.log(canConvertToInteger(str1)); // true
console.log(canConvertToInteger(str2)); // false

console.log(canConvertToFloat(str1)); // true
console.log(canConvertToFloat(str2)); // true




//6



function numberToString(num) {
  return num.toString();
}

var stringResult = numberToString(42); // stringResult will be "42" as a string.



//7

var decimalString = "3.14";
var integerValue = parseInt(decimalString, 10); // integerValue will be 3 as an integer.
