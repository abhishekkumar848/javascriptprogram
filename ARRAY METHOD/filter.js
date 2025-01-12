let number = [2,6,8,613,77,21,34,24,61,27];
let even = number.filter((number) => {
    return(number%2 == 0);
})
console.log("this is a even number : "+ even);
//odd
let odd = number.filter((number) => {
    return(number%2 != 0);
})
console.log("this is a odd number : "+ odd);
