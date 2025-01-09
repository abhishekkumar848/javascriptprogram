let movie = "kick";
let guess = prompt("Guess the movie name : ");
while((guess!= movie)&& (guess != "exit")){
    guess = prompt("Guess the movie name : ");
}
if(guess == movie){
    alert("You are right");
}