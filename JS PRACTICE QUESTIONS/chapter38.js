
let globalVar = "I'm a global variable";

// 1. 
function demonstrateLocalVariable() {
  let localVar = "I'm a local variable";
  console.log(localVar);
  console.log(globalVar); 
}

// Call the function
demonstrateLocalVariable();

// 2.
function accessGlobalVariable() {
  console.log(globalVar);
}


accessGlobalVariable();
