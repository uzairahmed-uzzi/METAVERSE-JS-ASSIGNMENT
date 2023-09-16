//1
var password = "12345"; 

if (password !== "") {
    if (password.length > 5) {
        alert("OK");
    } else {
        alert("Password must be greater than 5");
    }
}


//2
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}


//3
if (a === 1 && c === "Max") {
    alert("OK");
}


//4
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed.");
    }
}

