// Code:
function sum(a,b) {
        return  a+b;
}
//
console.log(` THIS IS SUM A OR B  ${sum(5,10)}`);


// Explanation: The function sum takes two arguments and returns the sum of those arguments. The function sum is called with the arguments 40 and 40, which returns 80. The function sum is called again with the arguments 80 and 10, which returns 90. The final output is 90.
console.log(` THIS IS TOTAT  ${sum(sum(40,40),10)}`);
// Output: 90


function adult(age){
    if (age>=18){
        return " you are 18+  ";

        }
        else{
            return " you are not 18+  ";
        }

}
console.log(adult(22));
console.log(adult(15));
