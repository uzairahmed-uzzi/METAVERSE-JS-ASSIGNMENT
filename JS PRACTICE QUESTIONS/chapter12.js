//1
var variable1 = 20;
var variable2 = 15;

if (variable1 >= variable2) {
    alert("variable1 is greater than or equal to variable2");
} else {
    alert("variable1 is less than variable2");
}
	

//2
var marks = parseFloat(prompt("Enter your marks:"));

if (marks >= 90) {
    alert("Your grade is A and your percentage is " + marks + "%");
} else if (marks >= 70) {
    alert("Your grade is B and your percentage is " + marks + "%");
} else if (marks >= 50) {
    alert("Your grade is C and your percentage is " + marks + "%");
} else {
    alert("You have failed with a percentage of " + marks + "%");
}


//3
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}



//4

var city = prompt("Enter a city:");

if (city === "Karachi") {
    alert("Acknowledging that it is Karachi.");
} else if (city === "Lahore") {
    alert("Acknowledging that it is Lahore.");
} else {
    alert("City not recognized.");
}



