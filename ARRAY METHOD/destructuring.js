let names = ["abhishek","anmol", "ajay","rahul"];
let firstwinner = names[0];
let secondwinner = names[1];
let third = names[2];
console.log(firstwinner,secondwinner,third);
// short method is 
let [first , second, thirdwinner ]= names;
console.log(first,second,thirdwinner);

// object 

let student={
    name : "ABHISHEK",
    age : 22,
    subject : ["java","dsa","c++","dbms"],
    username : "abhishekkumar@gmail.c",
    password : "8156dbf5442",

};

let {username,password}= student;
console.log(username,password);
// store new variable
let {username : user , password : key } = student;
console.log(user);
console.log(key);
