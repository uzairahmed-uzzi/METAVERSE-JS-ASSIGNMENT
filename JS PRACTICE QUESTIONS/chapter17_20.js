//1
for (var i = 0; i < 10; i++) {
    // Loop body, will execute 10 times
}

//2
for (var i = 0; i <= 11; i++) {
    // Loop body, will execute 12 times
}


//3

for (var i = 0; i <= 4; i++) {
    // Loop body, will execute 5 times
}

//4
for (var counter = 0; counter < 100; counter++) {
    // Loop body, will execute 100 times
}


//5

for (var i = 3; i > 0; i--) {
    // Loop body, will execute 3 times
}

//6
var array = [1, 2, 3, 4, 5];
var numberOfElements = array.length; // This assigns the number of elements (5) to numberOfElements.

//7
var flag = true; // You can choose any Boolean value (true or false).

//8

for (var i = 0; i < pets.length; i++) {
    // Loop body, will execute as many times as there are elements in the "pets" array.
}

//9
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert("Counter is: " + i);
        break;
    }
}


//10
var userNames = ["Alice", "Bob", "Charlie", "David"]; // Replace with your list of user names.
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    }
}
if (i === userNames.length) {
    alert("Please write the correct user name");
}


//11

var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("Match not found");
}


//12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

