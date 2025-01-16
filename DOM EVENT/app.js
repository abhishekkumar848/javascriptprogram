let btn = document.querySelector('#cli');
function print () {
    console.log(" hii you are so ")
}
btn.onclick = function () {
   
    console.log( "Click me again!");
}
// addeventlistener

btn.addEventListener("click", function () {
    console.log("SEE MORE ADDEVENTLISTERNER")
    
})
// let chage a color for use "this " event 
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");

function changecolor() {
    this.style.backgroundColor ="pink";
}

h3.addEventListener("click",changecolor);
btn.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);