 function calsum(a,b) {
    let sum = a + b; // function scope
    return sum;
 }
    let sum = 0; // global scope
    let result = console.log(calsum(10,20)); 
    
 //