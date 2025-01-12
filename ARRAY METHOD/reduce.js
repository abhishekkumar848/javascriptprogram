let number = [2,3,8,6,22,6,88,12,36,];
let max = 0
let ans = number.reduce((max , number)=> {
    if (max< number) {
        return number;
    }
    else{
        return max;
    }
     

})
console.log("this is a maximum  : " +  ans);