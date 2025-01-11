 // Lexical Scope
function outer() {
    let x = 10;
    let y = 20;
    function inner() {
        let z = 30;
        console.log(x + y + z);
    }
    inner();
} 
outer(); // 60
// In this example, the inner function has access to the variables x, y, and z. This is an example of lexical scope.