// 1.
let variableToCheck = "case2";
switch (variableToCheck) {
  case "case1":
    console.log("This is case 1");
    break;
  case "case2":
    console.log("This is case 2");
    break;
  case "case3":
    console.log("This is case 3");
    break;
  default:
    console.log("This is the default case");
}

// 2. 
let cityName = prompt("Enter a city name:");

switch (cityName.toLowerCase()) {
  case "paris":
    alert("You entered Paris. It's the capital of France!");
    break;
  case "new york":
    alert("You entered New York. It's a major city in the USA.");
    break;
  case "london":
    alert("You entered London. It's the capital of the UK.");
    break;
  default:
    alert("City not recognized or information not available.");
}
