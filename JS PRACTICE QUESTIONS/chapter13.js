//1
if ((a === b) && (c === d)) {
    // Rest of the code
}


//2
if ((a === b) || (c !== d)) {
    // Rest of the code
}


//3
if ((name === "Hamza" || name === "Arsalan") && (age < 60)) {
    // Rest of the code
}


//4

var num1 = 5;
var num2 = 10;

if (num1 < num2 || num1 > num2) {
    alert("The condition is met.");
}

//5

var firstName = "Uzair";
var lastName = "Ahmed";
var age = 22;

// Example for the scenario you described in question 5:
var enteredFirstName = prompt("Enter your first name:");
var enteredLastName = prompt("Enter your last name:");

if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Your first and last names match.");
}
