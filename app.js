console.log("abhishek is here ");
console.log(1+3*5);
let a=88;
let b=55;
let c= a+b;
console.log(c);
// hello comment
 let iceprice=20;
 let salt=28;
 console.log(`Total price is ${iceprice+salt} rupess...`);
 let menage=23;
 console.log(menage>19);
 console.log(menage>=19);
 console.log(menage<19);
 console.log(menage<=19);
// condition statement
let age =25;
if(age>=19){
    console.log(`welcome to the team 😆❤️🚖${iceprice+salt} skyki`) 
}

if( age<19){
    console.log("you can,t enter this team🔞")
}
// popcone price 
let size="m";
if(size=== "xl"){
    console.log(250 + "rupess");
}
else if(size=== "x"){
    console.log(200 +"rupess");
}
else if(size=== "m"){
    console.log(150 + "rupess");
}

// logical opertator
// && 
// || 
//!
let marks=75;

if((marks>33 && marks>0) || !(mask>50) ){
    console.log("pass ")
    console.log(" 👌 ")

}

// switch statement
       

// food odder list

let odder_price= prompt (" enter your odder name");
switch(odder_price){
    case "dosa":
         console.log(180 + "rupess");
        break;
        case "finger chips":
        console.log(160 + "rupess");
        break;
        case "idli":
        console.log(120 + "rupess");
        break;
        case "chomin":
        console.log(130 + "rupess");
        break;
        case "chili patoto":
        console.log(150 + "rupess");
        break;
        case "momos":
        console.log(70 + "rupess");
        break; 
        case "soya chap":
        console.log(80 + "rupess");
        break;
        default :
        console.log("This time not available ");
}

//*****string method
//1 touppercase
// 2 tolowercase
//3 slice
// 4  trim
let num="8109603996";

let non=  "******";
console.log(non+ num.slice(6));
