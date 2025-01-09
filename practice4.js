
// high order function
//function level (cal,fun){
 // for (let i = 0; i <= fun; i++) {
  //  cal();    
 // }
//}


//let multi =function (){
//    console.log("hello")
//}

//level(multi,8)
//this keyword

//  const hello = {
//   name:"abhishek",
//   Age :22 ,
//   math:45 ,
//  sci : 4 ,
//   hind :44 ,
//   getavg(){
//     let avg =(this.math+this.sci+this.hind)/3 

//     console.log(`${this.name}mask is a =${avg}`);
//   },
// }

// ❤️❤️ arrow function

const ports =(a,b)=>{
  console.log(a+b);

}

// ❤️❤️set time out 

 console.log("hii there ");
 setTimeout(()=>{
  console.log("hello i am abhishk");
 },5000);
 console.log("thank for waiting");

// ❤️❤️set interval

setInterval(()=>{
     console.log("hello i am abhishk");
    },2000);

 // ❤️❤️array for each
 
  let arr =[{
    name:"abhi",
    marks: 92,
  },
  {
    name:"rohit",
    marks: 95,
  },
  {
    name:"anmol",
    marks: 94,
  }];
  // arr.forEach((student)=>{
  //   console.log(student.marks)
  // });
  
// map function
  let gpa = arr.map((el)  => {
    return el.marks / 10;
  });

// filter
  let nums = [1,2,5,2,9,5,9,8,99,];
  let even = nums.filter((nums)=>(nums %2==0));
  let odd = nums.filter((nums)=>(nums %2!=0));
// every method true or false 

let nums2 = nums.every((nums)=>(nums%2==0));