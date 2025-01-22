function data(event) {
    console.log("   hii ");
}
data();
// visual call stack

function one() {
    return 1

}

function two() {
    return one() + one()
}

function third() {
    let sum = two() + one()
    console.log(sum);
    
}
third();

setTimeout(function (params) {
    function one() {
        return 1
    
    }
    
    function two() {
        return one() + one()
    }
    
    function third() {
        let sum = two() + one()
        console.log(sum);
        
    }
    third();
},4000);
// example  hai 
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
let level  = 0 ;

btn.addEventListener("click",function () {
    h2.innerText= "they is a abhishek"; 
    let create  = document.createElement("button")   ;
     level++
    create.innerText= `hello every level is  ${level } ` ;
     document.body.appendChild(create);
     let h1 = document.querySelector("h1");
     h1.style.color= 'red';
    let span = document.querySelector("span");
    span.style.color= "pink"
     create.addEventListener("click",function () {
        create.remove();
    })

})
// call back hell


// let h1 = document.querySelector("h1");
// h1.style.color= 'red';
// let span = document.querySelector("span");
// span.style.color= "pink"