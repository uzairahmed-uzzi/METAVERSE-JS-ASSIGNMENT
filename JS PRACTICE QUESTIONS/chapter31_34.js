// Task 1
let dObj = new Date();

// Task 2
let dStr = new Date().toString();

// Task 3
let d = new Date();
let day = d.getDay();

// Task 4
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[day]);

// Task 5
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1; 
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();

// Task 6
let later = new Date(2020, 11, 31); // Note: Months are 0-based, so December is represented as 11.

// Task 7
let customDate = new Date(1992, 1, 2); // February is represented as 1.

// Task 8
let referenceDate = new Date(1980, 0, 1); // January is represented as 0.
let elapsedMilliseconds = now - referenceDate;
alert(elapsedMilliseconds);

// Task 9

let newYear = 2024;
d.setFullYear(newYear);

// Task 10

d.setMonth(0); 

// Task 11
// You cannot directly change the day of the week for a specific date in JavaScript because it is determined by the date itself. You can create a new date object with the desired day of the week, but it won't change the original date's day of the week.


// Task 12

function changeMinutesToSpecificValue() {
  let time = prompt("Enter a time (HH:mm):");
  let parts = time.split(":");
  let hours = parseInt(parts[0]);
  let newMinutes = parseInt(prompt("Enter the new minutes:"));

  if (!isNaN(hours) && !isNaN(newMinutes)) {
    let newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(newMinutes);
    alert("New Time: " + newTime.toLocaleTimeString());
  } else {
    alert("Invalid input.");
  }
}

// Task 13

function addHoursToTime() {
  let time = prompt("Enter a time (HH:mm):");
  let parts = time.split(":");
  let hours = parseInt(parts[0]);
  let minutes = parseInt(parts[1]);
  let hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));

  if (!isNaN(hours) && !isNaN(minutes) && !isNaN(hoursToAdd)) {
    let newTime = new Date();
    newTime.setHours(hours + hoursToAdd);
    newTime.setMinutes(minutes);
    alert("New Time: " + newTime.toLocaleTimeString());
  } else {
    alert("Invalid input.");
  }
}

// Task 14

function calculateAge(birthDate) {
  const now = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  
  let age = currentYear - birthYear;
  

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }
  
  return age;
}


const birthDate = new Date(1990, 5, 15); // June 15, 1990
const age = calculateAge(birthDate);
alert("Age: " + age + " years");
