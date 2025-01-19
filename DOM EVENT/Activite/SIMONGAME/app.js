let guess = [];
let user = [];
let started = false;
let level = 0;


let h2 = document.querySelector("h2");
let body = document.querySelector("body");
body.document.addEventListener("keypress", function () {
    if (started==false) {
        console.log("game is start");
        started = true;
        // Add any other initialization code here
        levelup();
    }
 

});

function levelup() {
    level++;
    h2.innerText= `your level is ${level}`;
    
}
