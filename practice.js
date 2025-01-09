// let firstname= "Abhishek";
// let lastname="kumar";
// console.log(`Welcome ${firstname + lastname}`)
let colur ="yellow";


if (colur=="red"){
    console.log("you can stop ");

}
else if (colur=="yellow"){
    console.log(" .... ");

}
else if (colur=="green"){
    console.log("goo");

}
else{
    console.log(" traffic light broken ");
}



// nested if else 
 let marks = 80;
 if (marks >=33) {
    console.log("pass");
    if (marks >= 60) {
        console.log("A");
    } else {
        console.log("o+");
    }
    
 } else if(marks<=32) {
    console.log("better luck next time!");
 }
 

 // SWITCH STATEMENT 
    let week_name= "2";
    switch (week_name) {
        case "1":
            console.log("monday");
            break;
            case "2":
            console.log("tuesday");
            break;
            case "3":
            console.log("wed");
            break;
            case "4":
            console.log("thu");
            break;
            case "5":
            console.log("fri");
            break;
            case "6":
            console.log("sat");
            break;
    
        default:
            console.log("sunday");
            break;
    } 
// slice
//let enter= prompt("")
//let newone="*****"

//console.log (newone+enter.slice(5,9));
//array 
let car = ["bmw","maruti","xub"];

// SPLICE
///let newcar=["xub","bmw","maruti","honda"];
//console.log(newcar.splice(0,1,"red","blue"));

// NESTED ARRAY 
 let studentname= [["abhishek",85],["anmol",95],["mohit",45]];
 if (studentname>=65) {
    console.log("GREAT U PASS EXAM ");
 } else {
    console.log("FAIL ");
 }
 

 // FOR LOOP
  for (let i = 1; i <=10; i++) {
    console.log(i);
    
  }
  console.log("odd number")

 for ( let i=1; i<=15;i=i+2){
    console.log(i)
 }



  // nester of loop
   for (let i =1; i <= 3;  i++) { console.log("outer "
    ,i
   )
    for (let j = 2; j <=5; j++) {
        console.log(j)
        
    }
    
   }

   // while loop

let i = 1;
while (i<=10) {
    console.log(i);
     i++;
}
//  LOOP WITH ARRAY
let names= ["anmol","prince","abhi","vihal","garg"];
names.push("anuj");
 for (let i = 0; i < names.length; i++) {
  console.log(i, names[i])
    
 }


 // nested  array with nestaed loop
 let would_top10school=[["DPA","BSPS","DPS","YSPS",],["PPS","BBPS","DR.A","YPS",]];
for (let i = 0; i< would_top10school.length; i++) {
    console.log(i, would_top10school[i],would_top10school.length[i])
    for (let j = 0; j < would_top10school.length; j++) {
    console.log(`j=${j}, ${would_top10school[i][j]}`)
    
    }
    
    
}
 // example 2

  let lowest_booking=[["KARLA EXPRESS",525],["ANDRERA EXPRESS",415],["MALWA",421]];
  for(let i=0; i<lowest_booking.length;i++){

    console.log( `here some info ${i}`);
    for(j= 0;j<lowest_booking.length;j++){
        console.log(lowest_booking[i][j])
    }
  }
  //   math object

  const otp = Math.random();
  random= otp*9000+1000;
  
  console.log(Math.floor(random));
  //
  