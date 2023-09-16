// 1. Code the first line of a function displayAlert.
function displayAlert() {
  alert("Displayed....");
}

// 2. 
function askName() {
  let userName = prompt("Enter name");
  
}

// 3. 
function callTwoFunctions() {
  // Call function 1
  functionName1();

  // Call function 2
  functionName2();
}

// 4. 
function promptAndAlertName() {
  let name = prompt("Enter name");
  alert("Hello, " + name + "!");
}

// 5. 
function concat(a, b, c) {
  // First line of the function
  // ... rest of the function code here
}

// 6. 
function concatenateStrings(str1, str2) {
  let result = str1 + str2;

}

// 7. 
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  
}

// 8. 
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}

// 9. 
function addNumbers(num1, num2) {
  return num1 + num2;
}

// 10. 
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}

// 11. 
let result = addNumbers(1,2); 

// 12. 
function letterCounts(word) {
  let counts = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    counts[letter] = (counts[letter] || 0) + 1;
  }
  return counts;
}

// 13. 
function setYearInDate(dateObj, year) {
  dateObj.setFullYear(year);
}

// 14. 
function calculateAge(dateOfBirth) {
  const now = new Date();
  const birthYear = dateOfBirth.getFullYear();
  const currentYear = now.getFullYear();
  return currentYear - birthYear;
}

// 15. 
const wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
function hasWord(word) {
  return wordArray.includes(word);
}

// 16. 
function repeatLetter(letter) {
  return letter.repeat(10);
}

// 17.
function reverseArray(arr) {
  return arr.reverse();
}
