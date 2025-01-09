 
 // Block scope
 
 {
    let x = 1;
 }
 console.log(x); // ReferenceError: x is not defined

// The variable x is defined within a block, so it is not accessible outside of that block.
// This is an example of block scope.
 for (let i = 1; i <= 5; i++) {
    
    
 }    
 console.log(i);
// ReferenceError: i is not defined