// api    json to json object 
let jokes = '{"joke": "Yo mama is so fat that her bellybutton gets home 15 minutes before she does.", "category": "fat"}';
console.log(jokes);
let request = JSON.parse(jokes);
console.log(request);

// json object to  json

let student = {
    name : " abhishek ",
    age : 26,
    gender: {
        M: 'MALE',
        F: "FELMALE"
    }
};

let data = JSON.stringify(student);
console.log(data);
// into json object 
let select = JSON.parse(data);
console.log(select.gender.M);

