//1

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); 


//2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); 


//3

var myArray = ["Element 1"];
myArray.unshift("Element 2"); 
alert(myArray[0]); 

//4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); 


//5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); 

//6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "element1", "element2");

//7
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); 


//8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); 
