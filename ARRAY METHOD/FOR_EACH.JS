let students = [
    {
        name: "Abhishek",
        age: 22,
        cgpa: 7.8
    },
    {
        name: "Rahul",
        age: 23,
        cgpa: 7.9
    },
    {
        name: "Anmol",
        age: 32,
        cgpa: 8.8
    }
];
// function print (students) {
//     console.log("name : "+ students.name);
//     console.log("age : "+ students.age);
//     console.log("cgpa : "+ students.cgpa);
// }
//  students.forEach(print);

//    try to some  this      
students.forEach(function connet(students) {
    console.log("name : "+ students.name);
    console.log("age  : "+ students.age);
    console.log("cgpa : "+ students.cgpa);
})