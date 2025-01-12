let num = [ 2,4,6,8,9];
let check = num.every(function (num) {
    return(num%2==0);
    
})
console.log(check);
let num2 = [ 2,4,6,8];
let check2 = num2.every(function (num2) {
    return(num2%2==0);
    
})

console.log(check2);
