// favorite movie
let movie ="total dhammal";
let guess = prompt("guess the movie");
while ((guess!=movie) && (guess!="quit")) {
    console.log("wrong");
    guess = prompt("pleas try again");
    
}
if (guess== movie) {
    console.log("congrats😊")
}