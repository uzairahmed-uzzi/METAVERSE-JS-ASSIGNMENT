// 1. Write a Code that runs twice and does nothing.
let i = 0;

// Using while loop
while (i < 2) {
  // Does nothing.
  i++;
}

i = 0; // Reset i for the next tasks.

// Using do...while loop
do {
  // Does nothing.
  i++;
} while (i < 2);

i = 0; // Reset i for the next tasks.

// Using for loop
for (let j = 0; j < 2; j++) {
  // Does nothing.
}

// 2. Code that looks for "pig" in the array.
var animals = ["horse", "ox", "cow", "pig", "duck"];
let foundPig = false;

// Using while loop
let k = 0;
while (k < animals.length) {
  if (animals[k] === "pig") {
    alert("Found it!");
    foundPig = true;
    break;
  }
  k++;
}

// Using do...while loop
foundPig = false;
let l = 0;
do {
  if (animals[l] === "pig") {
    alert("Found it!");
    foundPig = true;
    break;
  }
  l++;
} while (l < animals.length);

// Using for loop
for (let m = 0; m < animals.length; m++) {
  if (animals[m] === "pig") {
    alert("Found it!");
    break;
  }
}

// 3. Code to use a while loop to print the numbers from 1 to 10.
let number = 1;

// Using while loop
while (number <= 10) {
  console.log(number);
  number++;
}

// Using do...while loop
number = 1;
do {
  console.log(number);
  number++;
} while (number <= 10);

// Using for loop
for (let n = 1; n <= 10; n++) {
  console.log(n);
}

// 4. To use a while loop to ask the user for a number and then print that number back to them.
let userInput;

// Using while loop
while (true) {
  userInput = prompt("Enter a number:");
  if (!isNaN(userInput)) {
    break;
  }
}

alert("You entered: " + userInput);

// Using do...while loop
do {
  userInput = prompt("Enter a number:");
} while (isNaN(userInput));

alert("You entered: " + userInput);

// Using for loop (not suitable for this task as it doesn't allow repeated input)

// 5. To use a while loop to check if a number is even or odd.
let userNumber = parseInt(userInput);
let isEven = true;

// Using while loop
while (true) {
  if (userNumber % 2 !== 0) {
    isEven = false;
  }
  break;
}

console.log(userNumber + " is " + (isEven ? "even" : "odd"));

// Using do...while loop (not suitable for this task as it's always true that userNumber is either even or odd)

// Using for loop (not suitable for this task as it's always true that userNumber is either even or odd)

// 6. Create a guessing game where the user has to guess a number between 1 and 100.
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Using while loop
while (true) {
  let guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else if (guess === secretNumber) {
    alert("Congratulations! You guessed the number " + secretNumber + " in " + attempts + " attempts.");
    break;
  } else if (guess < secretNumber) {
    alert("Try a higher number.");
  } else {
    alert("Try a lower number.");
  }
}

// Using do...while loop
attempts = 0;
do {
  let guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else if (guess === secretNumber) {
    alert("Congratulations! You guessed the number " + secretNumber + " in " + attempts + " attempts.");
    break;
  } else if (guess < secretNumber) {
    alert("Try a higher number.");
  } else {
    alert("Try a lower number.");
  }
} while (true);

// Using for loop (not suitable for this task as it doesn't allow repeated guesses)

// 7. Use a while & do-while loop to create a countdown timer.
let countdown = 10;

// Using while loop
while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}

// Using do...while loop
countdown = 10;
do {
  console.log(countdown);
  countdown--;
} while (countdown >= 0);

// Using for loop (not suitable for this task as it's not a countdown but a fixed iteration)
